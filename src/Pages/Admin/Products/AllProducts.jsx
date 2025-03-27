import { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "../../Product/PItems";

const AdminDashboardAllProduct = () => {
	const [productList, setProductList] = useState(products);  

	// Placeholder delete function (replace with your API call)
	const handleDeleteCrumb = id => {
		const confirmBox = window.confirm(
			`Do you really want to delete the product with ID: ${id}?`
		);
		if (confirmBox) {
			// Simulate API delete (replace with actual fetch call)
			setProductList(prev => prev.filter(product => product._id !== id));
			console.log(`Deleted product with ID: ${id}`);
			// Example API call:
			// fetch(`${BaseURL}/products/${id}`, { method: "DELETE" })
			//   .then(() => setProductList(prev => prev.filter(p => p._id !== id)))
			//   .catch(err => console.error("Delete failed:", err));
		}
	};

	// Animation variants
	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
		hover: {
			scale: 1.03,
			boxShadow: "0 10px 20px rgba(1, 132, 150, 0.2)",
			transition: { duration: 0.3 },
		},
	};

	return (
		<div className="w-full min-h-screen relative font-[GeologicaFont] bg-gradient-to-b from-gray-50 to-white">
			<div className="w-full pt-8 pb-16">
				<motion.h1
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800">
					<span className="text-[#018496]">{productList.length}</span> Products
					Found
				</motion.h1>
				<motion.div
					initial={{ width: 0 }}
					animate={{ width: "100px" }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="h-1 bg-[#018496] rounded-full mx-auto mt-4"
				/>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[96%] mx-auto py-12">
					{productList.map(product => (
						<motion.div
							key={product._id}
							variants={cardVariants}
							initial="hidden"
							animate="visible"
							whileHover="hover"
							className="w-full max-w-[360px] bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 mx-auto">
							{/* Slider for multiple images */}

							<img
								src={product.img}
								alt={product.title}
								className="w-full h-[200px] object-cover"
							/>

							{/* Product Details */}
							<div className="text-center p-6">
								<p className="text-[#c9EB61] text-base md:text-lg font-medium">
									{product.title}
								</p>
								<p className="text-gray-700 text-sm md:text-base text-justify mt-2 line-clamp-3">
									{product.description}
								</p>

								{/* Action Buttons */}
								<div className="flex justify-center gap-4 mt-6">
									<Link
										to={`/superAdmin/product-solutions/update/${product._id}`}>
										<motion.button
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											className="bg-[#018496] text-white text-sm md:text-base font-semibold py-2 px-6 rounded-lg hover:bg-[#016f80] transition-colors">
											Edit
										</motion.button>
									</Link>
									<motion.button
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										onClick={() => handleDeleteCrumb(product._id)}
										className="bg-red-600 text-white text-sm md:text-base font-semibold py-2 px-6 rounded-lg hover:bg-red-700 transition-colors">
										Delete
									</motion.button>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

function NextButton({ onClick }) {
	return (
		<div
			className="bg-[#018496]/80 w-10 h-10 rounded-full absolute top-1/2 -translate-y-1/2 right-2 flex items-center justify-center cursor-pointer z-10 hover:bg-[#016f80]"
			onClick={onClick}>
			<MdKeyboardArrowRight className="text-white text-2xl" />
		</div>
	);
}

function PrevButton({ onClick }) {
	return (
		<div
			className="bg-[#018496]/80 w-10 h-10 rounded-full absolute top-1/2 -translate-y-1/2 left-2 flex items-center justify-center cursor-pointer z-10 hover:bg-[#016f80]"
			onClick={onClick}>
			<MdKeyboardArrowLeft className="text-white text-2xl" />
		</div>
	);
}

export default AdminDashboardAllProduct;
