import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "./PCategory"; // Assuming categories is an array of { category, img, title }
import PageTitle from "../../utils/PageTitle";

const Product = () => {
	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1, delayChildren: 0.2 },
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
		hover: {
			scale: 1.05,
			boxShadow: "0 15px 30px rgba(1, 132, 150, 0.2)",
			transition: { duration: 0.3 },
		},
	};

	const textVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } },
		hover: { scale: 1.1, color: "#c9EB61" }, // Lime green for contrast
	};

	return (
		<section className="xl:w-[1400px] mx-auto py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
			<PageTitle title={"Products || AR Labels & Trims Ltd."} />
			{/* Section Header */}
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-center mb-12">
				<h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
					Explore Our <span className="text-[#018496]">Premium Products</span>
				</h2>
				<p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
					Discover innovative solutions designed to elevate your brand with
					style and sustainability.
				</p>
				<motion.div
					initial={{ width: 0 }}
					animate={{ width: "100px" }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="h-1 bg-[#018496] rounded-full mx-auto mt-4"
				/>
			</motion.div>

			{/* Product Grid */}
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{categories.map((category, index) => (
					<motion.div
						key={index}
						variants={cardVariants}
						whileHover="hover"
						className="relative group overflow-hidden rounded-xl shadow-lg">
						<Link to={`/product/${category.category}`}>
							{/* Product Image */}
							<motion.img
								src={category.img}
								alt={category.title}
								className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
								initial={{ scale: 1 }}
								whileHover={{ scale: 1.1 }}
							/>

							{/* Overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
								<motion.p
									variants={textVariants}
									initial="hidden"
									animate="visible"
									whileHover="hover"
									className="text-white font-semibold text-lg md:text-xl p-6 w-full truncate text-center">
									{category.title}
								</motion.p>
							</div>

							{/* Decorative Hover Border */}
							<motion.div
								className="absolute inset-0 border-2 border-[#018496] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
								initial={{ opacity: 0 }}
								whileHover={{ opacity: 1 }}
							/>
						</Link>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default Product;
