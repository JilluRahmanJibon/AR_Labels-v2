import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { IoChevronForwardCircle } from "react-icons/io5";
import PageTitle from "../../utils/PageTitle";
import WhyChooseArltl from "../../components/WhyChooseArltl/WhyChooseArltl";
import { products } from "./PItems"; // Assuming this is your product data file
import Subscribe from "../../Shared/Subscribe/Subscribe";

const ProductDetails = () => {
	const { pCategory } = useParams();

	// Find the product that matches the pCategory from the URL
	const selectedProduct = products.find(
		item => item.category.toLowerCase() === pCategory?.toLowerCase()
	);

	// Fallback if no product is found
	if (!selectedProduct) {
		return (
			<main className="w-full min-h-screen flex items-center justify-center font-[GeologicaFont]">
				<PageTitle title="Product Not Found - AR Labels & Trims Ltd." />
				<div className="text-center">
					<h1 className="text-3xl md:text-4xl font-bold text-gray-800">
						Product Not Found
					</h1>
					<p className="text-gray-600 mt-4">
						Sorry, we couldn’t find a product for the category "{pCategory}".
					</p>
				</div>
			</main>
		);
	}

	// Animation variants
	const bannerVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 0.8 } },
	};

	const textVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
	};

	const listVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
		hover: { x: 10, transition: { duration: 0.3 } },
	};

	return (
		<main className="w-full font-[GeologicaFont] bg-gradient-to-b from-gray-50 to-white">
			<PageTitle title={`${selectedProduct.title} - AR Labels & Trims Ltd.`} />

			{/* Banner Section */}
			<section className="w-full">
				<motion.div
					variants={bannerVariants}
					initial="hidden"
					animate="visible"
					className="relative w-full md:h-[83vh] h-[60vh] ">
					{selectedProduct.video ? (
						<video
							className="w-full h-full object-cover rounded-br-[6rem]"
							src={selectedProduct.video}
							autoPlay
							muted
							loop>
							Your browser does not support the video tag.
						</video>
					) : (
						<img
							src={selectedProduct.img}
							alt={selectedProduct.title}
							className="w-full h-full object-cover rounded-br-[6rem]"
						/>
					)}
					<div className="absolute inset-0 rounded-br-[6rem] bg-gray-900/60 flex flex-col items-center justify-center text-center text-white p-6 md:p-12">
						<motion.h1
							variants={textVariants}
							className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4">
							{selectedProduct.title}
						</motion.h1>
						<motion.p
							variants={textVariants}
							className="text-sm sm:text-base md:text-lg max-w-3xl">
							{selectedProduct.description.slice(0, 150)}...
						</motion.p>
					</div>
				</motion.div>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="text-gray-700 text-base md:text-lg py-6 px-4 md:px-8 xl:w-[1230px] mx-auto">
					{selectedProduct.description}
				</motion.p>
			</section>

			{/* Additional Info Section */}
			<section className="xl:w-[1230px] w-[96%] mx-auto py-16">
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
					What Do You Need?
				</motion.h2>
				<motion.div
					variants={listVariants}
					initial="hidden"
					animate="visible"
					className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					{[
						"Educate your customers",
						"Sector inspiration",
						"Every type of material",
						"Attaching options",
						"Something unique",
						"Forward-thinking tech",
						"Form or function?",
					].map((item, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							whileHover="hover"
							className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 hover:bg-gray-50 transition-colors">
							<p className="text-gray-700 text-sm md:text-base font-medium">
								{item}
							</p>
							<IoChevronForwardCircle className="text-[#018496] w-6 h-6" />
						</motion.div>
					))}
				</motion.div>
			</section>

			{/* Why Choose Section */}
			<WhyChooseArltl />
			<Subscribe />
		</main>
	);
};

export default ProductDetails;
