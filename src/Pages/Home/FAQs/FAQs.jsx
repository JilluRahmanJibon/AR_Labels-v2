import { useState, memo } from "react";
import { motion } from "framer-motion";

// Cached FAQ data
const faqs = [
	{
		question: "What is the minimum order quantity?",
		answer: "Our minimum order quantity is 100 units per design.",
	},
	{
		question: "Do you offer custom designs?",
		answer:
			"Yes, we provide custom design services to meet your specific needs.",
	},
	{
		question: "What are your production lead times?",
		answer:
			"Production lead times typically range from 4 to 6 weeks, depending on the order size and complexity.",
	},
];

// Memoized FAQ Item
const FAQItem = memo(({ faq, index, isActive, onToggle }) => {
	const cardVariants = {
		hidden: { opacity: 0, y: 30, scale: 0.95 },
		visible: { opacity: 1, y: 0, scale: 1 },
		hover: { scale: 1.03, boxShadow: "0px 10px 20px rgba(1, 132, 150, 0.2)" },
	};

	return (
		<motion.div
			variants={cardVariants}
			initial="hidden"
			whileInView="visible"
			whileHover="hover"
			transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
			viewport={{ once: false }}
			className="mb-6 relative overflow-hidden rounded-xl shadow-lg border border-gray-200 hover:border-[#018496]/50">
			{/* Gradient Overlay on Hover */}
			<div className="absolute inset-0 bg-gradient-to-t from-[#018496]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 z-0"></div>

			{/* Question Button */}
			<button
				onClick={() => onToggle(index)}
				className="w-full text-left flex justify-between items-center bg-white p-5 md:p-6 focus:outline-none z-10 relative">
				<span className="text-gray-800 font-semibold text-base md:text-lg">
					{faq.question}
				</span>
				<motion.span
					animate={{ rotate: isActive ? 45 : 0 }}
					transition={{ duration: 0.3 }}
					className="text-[#018496] text-xl md:text-2xl font-bold">
					{isActive ? "×" : "+"}
				</motion.span>
			</button>

			{/* Answer Section */}
			{isActive && (
				<motion.div
					initial={{ opacity: 0, height: 0 }}
					animate={{ opacity: 1, height: "auto" }}
					exit={{ opacity: 0, height: 0 }}
					transition={{ duration: 0.4 }}
					className="p-5 md:p-6 bg-white z-10 relative">
					<p className="text-gray-600 text-sm md:text-base leading-relaxed">
						{faq.answer}
					</p>
				</motion.div>
			)}

			{/* Decorative Element */}
			<motion.div
				className="absolute bottom-0 left-0 w-0 h-2 bg-[#018496] rounded-r-full"
				whileInView={{ width: isActive ? 120 : 60 }}
				transition={{ duration: 0.6, delay: index * 0.15 }}
			/>
		</motion.div>
	);
});

FAQItem.displayName = "FAQItemComponent";

const FAQs = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleToggle = index => {
		setActiveIndex(prev => (prev === index ? null : index));
	};

	return (
		<section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
			<div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
				{/* Animated Title Section */}
				<motion.h2
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: false }}
					className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 tracking-tight drop-shadow-md">
					Frequently Asked Questions
					<span className="block h-1 w-24 bg-[#018496] rounded-full mx-auto mt-3"></span>
				</motion.h2>

				{/* FAQ Items */}
				<div className="max-w-3xl mx-auto">
					{faqs.map((faq, index) => (
						<FAQItem
							key={index}
							faq={faq}
							index={index}
							isActive={activeIndex === index}
							onToggle={handleToggle}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQs;
