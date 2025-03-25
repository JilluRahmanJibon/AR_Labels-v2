import { memo } from "react";
import { motion } from "framer-motion";

const Portfolio = memo(() => {
	const portfolioItems = [
		{
			image: "https://arltl.com/web-cms-arltl/uploads/portfolio-1.jpg",
			title: "Summer Collection",
		},
		{
			image: "https://arltl.com/web-cms-arltl/uploads/portfolio-2.jpg",
			title: "Winter Wear",
		},
		{
			image: "https://arltl.com/web-cms-arltl/uploads/portfolio-3.jpg",
			title: "Sports Apparel",
		},
		{
			image: "https://arltl.com/web-cms-arltl/uploads/portfolio-4.jpg",
			title: "Casual Line",
		},
	];

	// Animation variants
	const itemVariants = {
		hidden: { opacity: 0, scale: 0.9, rotate: -5 },
		visible: { opacity: 1, scale: 1, rotate: 0 },
		hover: { scale: 1.05, boxShadow: "0px 15px 30px rgba(1, 132, 150, 0.3)" },
	};

	return (
		<section className="py-12 md:py-20 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
			<div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
				{/* Animated Title Section */}
				<motion.h2
					className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 tracking-tight drop-shadow-md"
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: false }}>
					Our Portfolio
					<span className="block h-1 w-24 bg-[#018496] rounded-full mx-auto mt-3"></span>
				</motion.h2>

				{/* Portfolio Items */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
					{portfolioItems.map((item, index) => (
						<motion.div
							key={item.title}
							variants={itemVariants}
							initial="hidden"
							whileInView="visible"
							whileHover="hover"
							transition={{
								duration: 0.5,
								delay: index * 0.15,
								ease: "easeOut",
							}}
							viewport={{ once: false }}
							className="relative group w-full sm:w-[280px] h-[280px] rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:border-[#018496]/50 cursor-pointer">
							{/* Gradient Overlay on Hover */}
							<div className="absolute inset-0 bg-gradient-to-t from-[#018496]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

							{/* Main Image */}
							<img
								src={item.image}
								alt={item.title}
								className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
								loading="lazy"
							/>

							{/* Hover Content */}
							<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
								<motion.span
									className="text-white text-xl md:text-2xl font-bold tracking-wide drop-shadow-lg"
									initial={{ y: 20 }}
									whileHover={{ y: 0 }}
									transition={{ duration: 0.3 }}
									aria-label={`View ${item.title}`}>
									{item.title}
								</motion.span>
							</div>

							{/* Decorative Element */}
							<motion.div
								className="absolute bottom-0 left-0 w-0 h-2 bg-[#018496] rounded-r-full"
								whileInView={{ width: 100 }}
								transition={{ duration: 0.8, delay: index * 0.15 }}
							/>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
});

Portfolio.displayName = "Portfolio";

export default Portfolio;
