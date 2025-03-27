import { motion } from "framer-motion";

// Fake affiliation data
const affiliationsData = [
	{
		id: 1,
		name: "Bangladesh Garment Manufacturers and Exporters Association (BGMEA)",
		logo: "https://www.arltl.com/web-cms-arltl/uploads/Woven-Label-1++.jpg",
		description:
			"A leading trade association promoting the garment industry in Bangladesh.",
	},
	{
		id: 2,
		name: "International Apparel Federation (IAF)",
		logo: "https://www.arltl.com/web-cms-arltl/uploads/Woven-Label-1++.jpg",
		description:
			"A global network advancing innovation and sustainability in apparel.",
	},
	{
		id: 3,
		name: "Textile Industry Sustainability Council (TISC)",
		logo: "https://www.arltl.com/web-cms-arltl/uploads/Woven-Label-1++.jpg",
		description:
			"Committed to eco-friendly practices in textile manufacturing.",
	},
	{
		id: 4,
		name: "Global Trims Alliance (GTA)",
		logo: "https://www.arltl.com/web-cms-arltl/uploads/Woven-Label-1++.jpg",
		description:
			"A coalition fostering collaboration in the trims and accessories sector.",
	},
];

function AffiliationsDetails() {
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
			<main className="xl:w-[1230px] w-[96%] mx-auto py-20 px-6 overflow-hidden">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center text-gray-800 mb-12">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
						Our <span className="text-[#018496]">Affiliations</span>
					</h1>
					<motion.div
						variants={underlineVariants}
						initial="hidden"
						animate="visible"
						className="h-1 bg-[#018496] rounded-full mx-auto mt-4"
					/>
				</motion.div>

				{/* Affiliations Grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{affiliationsData.map(affiliation => (
						<motion.div
							key={affiliation.id}
							variants={cardVariants}
							whileHover="hover"
							className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center transition-all duration-300 group relative">
							{/* Logo */}
							<div className="w-full h-[150px] flex items-center justify-center bg-gray-100">
								<motion.img
									src={affiliation.logo}
									alt={affiliation.name}
									className="  object-contain group-hover:scale-110 transition-transform duration-300"
									initial={{ scale: 1 }}
									whileHover={{ scale: 1.1 }}
								/>
							</div>

							{/* Text Content */}
							<motion.div variants={textVariants} className="text-center p-6">
								<h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-[#018496] transition-colors duration-300">
									{affiliation.name}
								</h3>
								<p className="text-gray-600 text-sm md:text-base mt-2 leading-relaxed">
									{affiliation.description}
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
			</main>
		</div>
	);
}

export default AffiliationsDetails;
