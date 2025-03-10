import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BaseURL } from "../../../utils/BaseURL";

const fetchProducts = async () => {
	const { data } = await axios.get(`${BaseURL}/products/`);
	return data;
};

const fetchBanner = async productId => {
	const { data } = await axios.get(`${BaseURL}/banner/${productId}`);
	return data;
};

const BSection = () => {
	const [selectedProduct, setSelectedProduct] = useState(null);

	// Fetch products
	const {
		data: products,
		isLoading: isLoadingProducts,
		error: productsError,
	} = useQuery({
		queryKey: ["products"],
		queryFn: fetchProducts,
	});

	// Fetch banner for selected product (only fetch when a product is selected)
	const {
		data: bannerData,
		isLoading: isLoadingBanner,
		error: bannerError,
	} = useQuery({
		queryKey: ["banner", selectedProduct],
		queryFn: () => fetchBanner(selectedProduct),
		enabled: !!selectedProduct, // Only run query when a product is selected
	});

	return (
		<div className="p-4">
			<h2 className="text-xl font-semibold mb-2">
				Select a Product for Banner
			</h2>

			{/* Show loading state */}
			{isLoadingProducts && <p>Loading products...</p>}
			{productsError && <p className="text-red-500">Error loading products!</p>}
<h1>ffffffffffffffffffff</h1>
			{/* Product Selection Dropdown */}
			{/* <select
				className="border p-2 mb-4 w-full"
				onChange={e => setSelectedProduct(e.target.value)}
				value={selectedProduct || ""}
				disabled={isLoadingProducts || !products}>
				<option value="">Select a product</option>
				{products?.map(product => (
					<option key={product.id} value={product.id}>
						{product.name}
					</option>
				))}
			</select> */}
			{/* Show loading state for banner */}
			{isLoadingBanner && <p>Loading banner...</p>}
			{bannerError && <p className="text-red-500">Error loading banner!</p>}

			{/* Banner Section */}
			{bannerData && (
				<div className="mt-4 border p-4 bg-gray-100">
					<h3 className="text-lg font-bold">{bannerData.title}</h3>
					<img
						src={bannerData.image}
						alt={bannerData.title}
						className="w-full h-auto mt-2"
					/>
					<p className="mt-2">{bannerData.description}</p>
				</div>
			)}
		</div>
	);
};

export default BSection;
