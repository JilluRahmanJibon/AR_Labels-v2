import React from "react";
import { motion } from "framer-motion";

const OurService = React.memo(() => {
	const services = [
		{
			title: "Custom Design",
			description:
				"Tailored garment designs to meet your unique specifications.",
			icon: "🎨",
		},
		{
			title: "Bulk Production",
			description:
				"Efficient large-scale manufacturing with consistent quality.",
			icon: "🏭",
		},
		{
			title: "Eco-Friendly Fabrics",
			description:
				"Sourcing sustainable materials for environmentally conscious products.",
			icon: "🌿",
		},
	];

	// Animation variants
	const cardVariants = {
		hidden: { opacity: 0, y: 50, scale: 0.9 },
		visible: { opacity: 1, y: 0, scale: 1 },
		hover: { scale: 1.1, boxShadow: "0px 15px 30px rgba(1, 132, 150, 0.3)" },
	};

	return (
		<section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
			<div className="px-6 md:px-8 max-w-[1240px] mx-auto">
				{/* Section Heading */}
				<motion.h2
					className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 tracking-tight drop-shadow-md"
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: false }}>
					Our Exceptional Services
					<span className="block h-1 w-20 bg-[#018496] rounded-full mx-auto mt-2"></span>
				</motion.h2>

				{/* Service Items */}
				<div className="flex flex-wrap justify-center gap-10 md:gap-12">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							variants={cardVariants}
							initial="hidden"
							whileInView="visible"
							whileHover="hover"
							transition={{
								duration: 0.5,
								delay: index * 0.2,
								ease: "easeOut",
							}}
							viewport={{ once: false }}
							className="w-full sm:w-80 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center relative overflow-hidden border border-gray-200 hover:border-[#018496]/50">
							{/* Gradient Overlay on Hover */}
							<div className="absolute inset-0 bg-gradient-to-t from-[#018496]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 z-0"></div>

							{/* Icon */}
							<motion.div
								className="text-5xl md:text-6xl mb-4 z-10"
								whileHover={{ rotate: 360, scale: 1.2 }}
								transition={{ duration: 0.6 }}>
								{service.icon}
							</motion.div>

							{/* Title */}
							<h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 z-10">
								{service.title}
							</h3>

							{/* Description */}
							<p className="text-sm md:text-base text-gray-600 leading-relaxed z-10">
								{service.description}
							</p>

							{/* Decorative Element */}
							<motion.div
								className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-[#018496] rounded-t-full"
								whileInView={{ width: 80 }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
							/>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
});

OurService.displayName = "OurService";

export default OurService;
