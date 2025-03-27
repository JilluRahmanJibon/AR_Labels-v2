import { motion } from "framer-motion";

// Fake client reference data
const clientReferencesData = [
	{
		id: 1,
		name: "Global Fashion Co.",
		logo: "https://www.arltl.com/web-cms-arltl/uploads/Woven-Label-1++.jpg",
		testimonial:
			"AR Labels & Trims Ltd. has been an exceptional partner, delivering high-quality accessories on time.",
	},
	{
		id: 2,
		name: "Eco Apparel Ltd.",
		logo: "https://www.arltl.com/web-cms-arltl/uploads/Woven-Label-1++.jpg",
		testimonial:
			"Their innovative solutions and commitment to sustainability have elevated our brand.",
	},
	{
		id: 3,
		name: "TrendSetters Inc.",
		logo: "https://www.arltl.com/web-cms-arltl/uploads/Woven-Label-1++.jpg",
		testimonial:
			"Reliable, professional, and creative—AR Labels is a key part of our success.",
	},
	{
		id: 4,
		name: "StyleWorks Group",
		logo: "https://www.arltl.com/web-cms-arltl/uploads/Woven-Label-1++.jpg",
		testimonial:
			"Top-notch service and products that exceed expectations every time.",
	},
];

function ClientReferencesDetails() {
	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
		hover: {
			scale: 1.05,
			boxShadow: "0 15px 30px rgba(1, 132, 150, 0.2)",
			transition: { duration: 0.3 },
		},
	};

	const textVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } },
	};

	const underlineVariants = {
		hidden: { width: 0 },
		visible: { width: "100px", transition: { duration: 0.8, delay: 0.4 } },
	};

	return (
		<div className="bg-gradient-to-b from-gray-50 to-white font-[GeologicaFont]">
			<main className="xl:w-[1290px] w-full mx-auto py-20 px-6 overflow-hidden">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center text-gray-800 mb-12">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
						Client <span className="text-[#018496]">References</span>
					</h1>
					<motion.div
						variants={underlineVariants}
						initial="hidden"
						animate="visible"
						className="h-1 bg-[#018496] rounded-full mx-auto mt-4"
					/>
				</motion.div>

				{/* Client References Grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{clientReferencesData.map(client => (
						<motion.div
							key={client.id}
							variants={cardVariants}
							whileHover="hover"
							className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center transition-all duration-300 group relative">
							{/* Logo */}
							<div className="w-full h-[150px] flex items-center justify-center bg-gray-100">
								<motion.img
									src={client.logo}
									alt={client.name}
									className="  object-contain group-hover:scale-110 transition-transform duration-300"
									initial={{ scale: 1 }}
									whileHover={{ scale: 1.1 }}
								/>
							</div>

							{/* Text Content */}
							<motion.div variants={textVariants} className="text-center p-6">
								<h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-[#018496] transition-colors duration-300">
									{client.name}
								</h3>
								<p className="text-gray-600 text-sm md:text-base mt-2 leading-relaxed">
									"{client.testimonial}"
								</p>
							</motion.div>

							{/* Decorative Border */}
							<motion.div
								className="absolute inset-0 border-2 border-[#018496] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
								initial={{ opacity: 0 }}
								whileHover={{ opacity: 1 }}
							/>
						</motion.div>
					))}
				</motion.div>

				{/* Original Images (Optional) */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
					<motion.img
						variants={cardVariants}
						src="https://www.adzitrims.com/sul-web-cms-adzi/upload/cr_image_upload__1548563468_1548563468.jpg"
						alt="Client Reference 1"
						className="w-full h-[300px] object-cover rounded-lg shadow-lg"
					/>
					<motion.img
						variants={cardVariants}
						src="https://www.adzitrims.com/sul-web-cms-adzi/upload/company_image_upload__1548580052_1548580052.jpg"
						alt="Client Reference 2"
						className="w-full h-[300px] object-cover rounded-lg shadow-lg"
					/>
				</motion.div>
			</main>
		</div>
	);
}

export default ClientReferencesDetails;
