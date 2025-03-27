import { motion } from "framer-motion";
import {
	FaDollarSign,
	FaShippingFast,
	FaBoxOpen,
	FaComments,
} from "react-icons/fa";

const WhyChooseArltl = () => {
	// Data for the "Why Choose" section
	const reasons = [
		{
			title: "Minimum Stock Value",
			description:
				"Our minimum stockholding value is £10,000 annually. This can be set up across multiple currencies and for several locations.",
			icon: <FaDollarSign className="text-[#018496] w-8 h-8" />,
		},
		{
			title: "Fast Delivery",
			description:
				"A quick turnaround of your stock, with lead times typically taking between two and four weeks.",
			icon: <FaShippingFast className="text-[#018496] w-8 h-8" />,
		},
		{
			title: "Hassle-Free Orders",
			description:
				"Simple repeat ordering through our stockholding site, making your products easily accessible.",
			icon: <FaBoxOpen className="text-[#018496] w-8 h-8" />,
		},
		{
			title: "Great Communication",
			description:
				"We’ll liaise all the finer details directly with your vendors, giving you one less thing to manage.",
			icon: <FaComments className="text-[#018496] w-8 h-8" />,
		},
	];

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.2 },
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
		hover: {
			scale: 1.05,
			boxShadow: "0 10px 20px rgba(1, 132, 150, 0.2)",
			transition: { duration: 0.3 },
		},
	};

	return (
		<section className="w-full py-16   font-[GeologicaFont]">
			<div className="xl:w-[1230px] w-[96%] mx-auto">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">
						Why Choose <span className="text-[#018496]">AR Label?</span>
					</h2>
					<motion.div
						initial={{ width: 0 }}
						animate={{ width: "100px" }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="h-1 bg-[#018496] rounded-full mx-auto mt-4"
					/>
				</motion.div>

				{/* Reasons Grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{reasons.map((reason, index) => (
						<motion.div
							key={index}
							variants={cardVariants}
							whileHover="hover"
							className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col items-center">
							{/* Icon */}
							<div className="mb-4">{reason.icon}</div>

							{/* Title */}
							<h3 className="text-xl font-semibold text-gray-800 mb-2">
								{reason.title}
							</h3>

							{/* Description */}
							<p className="text-gray-600 text-sm md:text-base leading-relaxed">
								{reason.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default WhyChooseArltl;
