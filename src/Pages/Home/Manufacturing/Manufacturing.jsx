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

	return (
		<section className="pt-12 max-w-6xl mx-auto pb-6 bg-white GeologicaFont">
			<div className="md:px-0 px-4">
				{/* Animated Title Section */}
				<motion.h2
					className="text-xl sm:text-3xl font-semibold text-center text-gray-800 mb-6"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: false }}>
					Our Manufacturing Process
				</motion.h2>

				{/* Cards Section */}
				<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
					{steps.map((step, index) => (
						<motion.div
							key={step.title}
							className="flex items-center bg-white rounded-md shadow-md p-4 md:p-6"
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.2, delay: index * 0.1 }}
							viewport={{ once: false }}>
							{/* Icon + Text Row */}
							<div className="flex items-center space-x-4">
								<div className="text-4xl md:text-5xl">{step.icon}</div>
								<div className="text-left">
									<h3 className="text-lg font-semibold text-gray-800">
										{step.title}
									</h3>
									<p className="mt-1 text-sm sm:text-base text-gray-600">
										{step.description}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
});

// ✅ Adding display name to fix ESLint warning
Manufacturing.displayName = "Manufacturing";

export default Manufacturing;
