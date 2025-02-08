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

	return (
		<section className="py-6 GeologicaFont md:py-12">
			<div className="px-4">
				{/* Section Heading */}
				<motion.h2
					className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-6"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: false }} 
				>
					Our Services
				</motion.h2>

				{/* Service Items */}
				<div className="mt-4 flex flex-wrap justify-center gap-14">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							className="w-full sm:w-80 bg-white rounded-md shadow-md p-4 md:p-6 flex flex-col items-center text-center"
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1.1 }}  
							exit={{ opacity: 0, scale: 0.8 }}
							whileHover={{ scale: 1.15 }}
							transition={{ duration: 0.3, delay: index * 0.1 }}
							viewport={{ once: false }}  
						>
							<div className="text-4xl">{service.icon}</div>
							<h3 className="mt-3 text-lg font-semibold text-gray-800">
								{service.title}
							</h3>
							<p className="mt-2 text-sm sm:text-base text-gray-600">
								{service.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
});

// ✅ Adding display name to fix ESLint warning
OurService.displayName = "OurService";

export default OurService;
