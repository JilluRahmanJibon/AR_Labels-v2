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

	return (
		<section className="pb-4 bg-white GeologicaFont">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.h2
					className="sm:text-3xl text-[22px] font-semibold text-center text-gray-800 mb-6"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}>
					Our Portfolio
				</motion.h2>
				<div className="mt-4 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
					{portfolioItems.map((item, index) => (
						<motion.div
							key={item.title}
							className="relative group flex items-center justify-center sm:w-[280px] sm:h-[280px] w-[260px] cursor-pointer"
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1.1 }}  
							whileHover={{ scale: 1.1 }} 
							viewport={{ once: false }}  
							transition={{ duration: 0.5, delay: index * 0.2 }}>
							{/* Main Image */}
							<img
								src={item.image}
								alt={item.title}
								className="w-full h-full object-cover rounded-md shadow-md"
								loading="lazy" // Lazy load images
							/>
							{/* Hover Effect */}
							<div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
								<span
									className="text-black text-lg font-semibold"
									aria-label={`View ${item.title}`}>
									{item.title}
								</span>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
});

Portfolio.displayName = "Portfolio";

export default Portfolio;
