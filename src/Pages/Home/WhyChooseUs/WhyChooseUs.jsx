import { memo } from "react";
import { motion } from "framer-motion";

const WhyChooseUs = memo(() => {
	const reasons = [
		{
			title: "Competitive Pricing",
			description: "Offering the best prices without compromising on quality.",
			icon: "💲",
		},
		{
			title: "Quality Assurance",
			description: "Ensuring every product meets our strict quality standards.",
			icon: "🔍",
		},
		{
			title: "Modern Technology",
			description: "Utilizing the latest machinery for efficient production.",
			icon: "🖥️",
		},
		{
			title: "Timely Delivery",
			description: "Reliable delivery schedules to meet your deadlines.",
			icon: "⏰",
		},
	];

	return (
		<section className="py-12 bg-white GeologicaFont">
			<div className="container mx-auto px-6">
				{/* Animated Title Section */}
				<motion.h2
					className="sm:text-3xl text-[22px] font-semibold text-center text-gray-800 mb-6"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: false }} // Ensure it animates every time it comes into view
				>
					Why Choose Us
				</motion.h2>

				{/* Optimized Grid Section */}
				<div className="mt-6 flex flex-wrap justify-center gap-4 md:gap-6">
					{reasons.map((reason, index) => (
						<motion.div
							key={reason.title}
							className="w-[280px] h-[220px] bg-white rounded-md shadow-md flex flex-col justify-center items-center text-center px-4 py-3"
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							viewport={{ once: false }} // Ensure the animation triggers every time the element enters the viewport
						>
							{/* Icon + Text */}
							<div className="text-[40px] mb-2">{reason.icon}</div>
							<h3 className="text-[18px] font-semibold text-gray-800">
								{reason.title}
							</h3>
							<p className="text-[15px] text-gray-600 mt-2 h-[47px]">
								{reason.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
});

// ✅ Add display name for better debugging
WhyChooseUs.displayName = "WhyChooseUsComponent";

export default WhyChooseUs;
