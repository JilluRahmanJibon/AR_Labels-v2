import { memo } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoDotFill } from "react-icons/go";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../Components/Loader/Spinner";
import { Link } from "react-router-dom";
import { BaseURL } from "../../../utils/BaseURL";

const fetchAllProducts = async () => {
	try {
		const res = await fetch(`${BaseURL}/products/`);
		if (!res.ok) throw new Error("Failed to fetch products");
		const data = await res.json();
		return data?.data || [];  
	} catch (error) {
		console.error("Error fetching all products:", error);
		return [];  
	}
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

const Banner = () => {
	const bannerData = [
		{ id: 1, image: "https://arltl.com/web-cms-arltl/uploads/banner-1.jpg" },
		{ id: 2, image: "https://arltl.com/web-cms-arltl/uploads/banner-2.jpg" },
		{ id: 3, image: "https://arltl.com/web-cms-arltl/uploads/banner-3.jpg" },
		{ id: 4, image: "https://arltl.com/web-cms-arltl/uploads/banner-4.jpg" },
	];
	const { isLoading, data: products } = useQuery({
		queryKey: ["products"],
		queryFn: fetchAllProducts,
	});
	console.log("🚀 ~ Banner ~ products:", products);
	if (isLoading) {
		return <Spinner />;
	}

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
		<div>
			{products?.length>0 && (
				<div className="max-w-[1920px] mx-auto">
					<Slider {...settings} className="w-full">
						{products?.map(({ _id, image }) => {
							if (!image || image.length === 0) {
								console.warn("Missing images for product:", _id);
								return null;
							}
							return (
								<Link key={_id} to={`/products/${_id}`}>
									<img
										src={image[0]?.img}
										loading="lazy"
										className="w-full h-auto max-h-[500px] object-cove"
										alt={`Product ${_id}`}
									/>
								</Link>
							);
						})}
					</Slider>
				</div>
			)}
		</div>
	);
};

export default Banner;
