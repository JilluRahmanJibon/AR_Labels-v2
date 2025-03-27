import { motion } from "framer-motion";

const CertificationsDetails = () => {
	const CertificationsData = [
		{
			id: 1,
			tittle: "Certification of ISO-9001-2015",
			image:
				"https://www.adzitrims.com/sul-web-cms-adzi/upload/certifications_logo__upload__1644838713_1644838713.jpg",
		},
		{
			id: 2,
			tittle: "Certification of ISO-14001-2015",
			image:
				"https://www.adzitrims.com/sul-web-cms-adzi/upload/certifications_logo__upload__1644838750_1644838750.jpg",
		},
		{
			id: 3,
			tittle: "Certification of Oeko-Tex",
			image:
				"https://www.adzitrims.com/sul-web-cms-adzi/upload/certifications_logo__upload__1644838828_1644838828.jpg",
		},
		{
			id: 4,
			tittle: "Certification of GRS",
			image:
				"https://www.adzitrims.com/sul-web-cms-adzi/upload/certifications_logo__upload__1644838872_1644838872.jpg",
		},
		{
			id: 5,
			tittle: "Certification of GOTS",
			image:
				"https://www.adzitrims.com/sul-web-cms-adzi/upload/certifications_logo__upload__1644839169_1644839169.png",
		},
		{
			id: 6,
			tittle: "Certification of amfori BSCI",
			image:
				"https://www.adzitrims.com/sul-web-cms-adzi/upload/certifications_logo__upload__1644839339_1644839339.jpg",
		},
		{
			id: 7,
			tittle: "Certification of FSC",
			image:
				"https://www.adzitrims.com/sul-web-cms-adzi/upload/certifications_logo__upload__1644839423_1644839423.png",
		},
		{
			id: 8,
			tittle: "Certification of BCI",
			image:
				"https://www.adzitrims.com/sul-web-cms-adzi/upload/certifications_logo__upload__1644839515_1644839515.png",
		},
	];

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
			<main className="xl:w-[1230px] w-[96%] mx-auto py-20 px-6">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center text-gray-800 mb-12">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
						Our <span className="text-[#018496]">Certifications</span>
					</h1>
					<motion.div
						variants={underlineVariants}
						initial="hidden"
						animate="visible"
						className="h-1 bg-[#018496] rounded-full mx-auto mt-4"
					/>
				</motion.div>

				{/* Certifications Grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
					{CertificationsData.map(cert => (
						<motion.div
							key={cert.id}
							variants={cardVariants}
							whileHover="hover"
							className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center transition-all duration-300 group relative">
							{/* Image */}
							<div className="w-full h-[200px] flex items-center justify-center bg-gray-100">
								<motion.img
									src={cert.image}
									alt={cert.tittle}
									className="w-[150px] h-[150px] object-contain group-hover:scale-110 transition-transform duration-300"
									initial={{ scale: 1 }}
									whileHover={{ scale: 1.1 }}
								/>
							</div>

							{/* Text Content */}
							<motion.div variants={textVariants} className="text-center p-6">
								<h2 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-[#018496] transition-colors duration-300">
									{cert.tittle}
								</h2>
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
};

export default CertificationsDetails;
