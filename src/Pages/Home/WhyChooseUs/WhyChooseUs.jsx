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

	// Animation variants
	const cardVariants = {
		hidden: { opacity: 0, y: 50, scale: 0.9 },
		visible: { opacity: 1, y: 0, scale: 1 },
		hover: { scale: 1.1, boxShadow: "0px 15px 30px rgba(1, 132, 150, 0.3)" },
	};

	return (
		<section className="py-12 md:py-20 bg-gradient-to-t from-gray-100 to-white overflow-hidden">
			<div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
				{/* Animated Title Section */}
				<motion.h2
					className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 tracking-tight drop-shadow-md"
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: false }}>
					Why Choose Us
					<span className="block h-1 w-24 bg-[#018496] rounded-full mx-auto mt-3"></span>
				</motion.h2>

				{/* Optimized Grid Section */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
					{reasons.map((reason, index) => (
						<motion.div
							key={reason.title}
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
							className="w-full bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-center text-center relative overflow-hidden border border-gray-200 hover:border-[#018496]/50">
							{/* Gradient Overlay on Hover */}
							<div className="absolute inset-0 bg-gradient-to-b from-[#018496]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 z-0"></div>

							{/* Icon */}
							<motion.div
								className="text-5xl md:text-6xl mb-4 z-10"
								whileHover={{ rotate: 360, scale: 1.2 }}
								transition={{ duration: 0.6 }}>
								{reason.icon}
							</motion.div>

							{/* Title */}
							<h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 z-10">
								{reason.title}
							</h3>

							{/* Description */}
							<p className="text-sm md:text-base text-gray-600 leading-relaxed z-10">
								{reason.description}
							</p>

							{/* Decorative Element */}
							<motion.div
								className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-[#018496] rounded-b-full"
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

WhyChooseUs.displayName = "WhyChooseUsComponent";

export default WhyChooseUs;
