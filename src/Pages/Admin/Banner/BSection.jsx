import { useState, memo } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BaseURL } from "../../../utils/BaseURL";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const fetchCategories = async () => {
	const response = await fetch(`${BaseURL}/categories`);
	if (!response.ok) throw new Error("Failed to fetch categories");
	return response.json();
};

const fetchBanner = async () => {
	const response = await fetch(`${BaseURL}/banner`);
	if (!response.ok) throw new Error("Failed to fetch banner");
	return response.json();
};

const NextButton = memo(({ onClick }) => (
	<div
		className="bg-gray-300 w-[30px] h-[80px] absolute top-1/2 -translate-y-1/2 right-0 flex items-center justify-center cursor-pointer z-10 text-black hover:text-[#018496] transition duration-300"
		onClick={onClick}>
		<MdKeyboardArrowRight className="text-[27px]" />
	</div>
));

NextButton.displayName = "NextButton";

const PrevButton = memo(({ onClick }) => (
	<div
		className="bg-gray-300 w-[30px] h-[80px] absolute top-1/2 -translate-y-1/2 left-0 flex items-center justify-center cursor-pointer z-10 text-black hover:text-[#018496] transition duration-300"
		onClick={onClick}>
		<MdKeyboardArrowLeft className="text-[27px]" />
	</div>
));

PrevButton.displayName = "PrevButton";

const BSection = () => {
	const [selectedProduct, setSelectedProduct] = useState(null);
	const queryClient = useQueryClient();

	const { data, isLoading, error } = useQuery({
		queryKey: ["/categories"],
		queryFn: fetchCategories,
		staleTime: 1000 * 60 * 5,
		refetchOnWindowFocus: false,
	});

	const {
		data: fetchedBanner,
		isLoading: bannerLoading,
		error: bannerError,
	} = useQuery({
		queryKey: ["/banner"],
		queryFn: fetchBanner,
	});

	// Simplified setBanner mutation
	const {
		mutate,
		isLoading: isSettingBanner,
		error: setBannerError,
	} = useMutation({
		mutationFn: async productId => {
			const token = localStorage.getItem("authToken");
			const { data } = await axios.post(
				`${BaseURL}/banner/set/${productId}`,
				{},
				{
					headers: { Authorization: token },
				}
			);
			return data;
		},
		onSuccess: () => queryClient.invalidateQueries(["/banner"]),
		onError: err => console.error("Error setting banner:", err),
	});

	// Handle banner setting
	const handleSetBanner = () => {
		if (selectedProduct) mutate(selectedProduct);
	};

	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		pauseOnHover: false,
		appendDots: dots => (
			<div style={{ bottom: "10px" }}>
				<ul className="flex justify-center space-x-2">{dots}</ul>
			</div>
		),
		customPaging: index => (
			<div className="text-gray-400 w-[12px]">
				<GoDotFill className="cursor-pointer text-[14px] sm:text-[17px]" />
			</div>
		),
		nextArrow: <NextButton />,
		prevArrow: <PrevButton />,
	};

	return (
		<div className="p-4">
			<h2 className="text-xl font-semibold mb-2">
				Select a Product for Banner
			</h2>

			{isLoading && <p>Loading products...</p>}
			{error && <p className="text-red-500">Error loading products!</p>}

			<select
				className="border p-2 mb-4 w-full"
				onChange={e => setSelectedProduct(e.target.value)}
				value={selectedProduct || ""}
				disabled={isLoading || !data}>
				<option value="">Select a product</option>
				{data?.data?.map(product => (
					<option key={product._id} value={product._id}>
						{product.title}
					</option>
				))}
			</select>

			<button
				onClick={handleSetBanner}
				className="bg-[#008E92] mb-3.5 text-white px-4 py-2 rounded disabled:bg-gray-400"
				disabled={!selectedProduct || isSettingBanner}>
				{isSettingBanner ? "Setting Banner..." : "Set Banner"}
			</button>

			{setBannerError && (
				<p className="text-red-500 mt-2">Error setting banner!</p>
			)}

			{bannerLoading && <p>Loading banner...</p>}
			{bannerError && (
				<p className="text-red-500 mt-2">Error loading banner!</p>
			)}

			{fetchedBanner?.data?.length > 0 ? (
				<div className="max-w-[1920px] mx-auto">
					<Slider {...settings} className="w-full">
						{fetchedBanner?.data?.map(({ _id, productID, img }) => (
							<Link key={_id} to={`/products/${productID}`}>
								<img
									src={img}
									loading="lazy"
									className="w-full h-auto max-h-[500px] object-cover"
									alt={`Product ${productID}`}
								/>
							</Link>
						))}
					</Slider>
				</div>
			) : (
				<p className="mt-4 text-gray-600">No banners available.</p>
			)}
		</div>
	);
};

export default BSection;
