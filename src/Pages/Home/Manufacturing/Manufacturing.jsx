import React from "react";
import { motion } from "framer-motion";

const Manufacturing = React.memo(() => {
	const steps = [
		{
			title: "Design",
			description:
				"Creating detailed garment designs tailored to client specifications.",
			icon: "✏️",
		},
		{
			title: "Sourcing",
			description:
				"Selecting high-quality, sustainable materials for production.",
			icon: "📦",
		},
		{
			title: "Production",
			description:
				"Efficient manufacturing processes ensuring timely delivery.",
			icon: "🏭",
		},
		{
			title: "Quality Control",
			description:
				"Rigorous testing to maintain the highest quality standards.",
			icon: "✅",
		},
	];

	// Animation variants
	const cardVariants = {
		hidden: { opacity: 0, x: -50, scale: 0.9 },
		visible: { opacity: 1, x: 0, scale: 1 },
		hover: { scale: 1.05, boxShadow: "0px 15px 30px rgba(1, 132, 150, 0.3)" },
	};

	return (
		<section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
			<div className="max-w-6xl mx-auto px-6 md:px-8">
				{/* Animated Title Section */}
				<motion.h2
					className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 tracking-tight drop-shadow-md"
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: false }}>
					Our Manufacturing Process
					<span className="block h-1 w-24 bg-[#018496] rounded-full mx-auto mt-3"></span>
				</motion.h2>

				{/* Cards Section */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
					{steps.map((step, index) => (
						<motion.div
							key={step.title}
							variants={cardVariants}
							initial="hidden"
							whileInView="visible"
							whileHover="hover"
							transition={{
								duration: 0.5,
								delay: index * 0.15,
								ease: "easeOut",
							}}
							viewport={{ once: false }}
							className="bg-white rounded-xl shadow-lg p-6 flex items-center relative overflow-hidden border border-gray-200 hover:border-[#018496]/50">
							{/* Gradient Overlay on Hover */}
							<div className="absolute inset-0 bg-gradient-to-r from-[#018496]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 z-0"></div>

							{/* Icon + Text Row */}
							<div className="flex items-center space-x-4 z-10">
								<motion.div
									className="text-5xl md:text-6xl flex-shrink-0"
									whileHover={{ rotate: 360, scale: 1.2 }}
									transition={{ duration: 0.6 }}>
									{step.icon}
								</motion.div>
								<div className="text-left">
									<h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
										{step.title}
									</h3>
									<p className="text-sm md:text-base text-gray-600 leading-relaxed">
										{step.description}
									</p>
								</div>
							</div>

							{/* Decorative Element */}
							<motion.div
								className="absolute bottom-0 left-0 w-0 h-1 bg-[#018496] rounded-r-full"
								whileInView={{ width: 60 }}
								transition={{ duration: 0.8, delay: index * 0.15 }}
							/>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
});

Manufacturing.displayName = "Manufacturing";

export default Manufacturing;
