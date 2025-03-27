import { motion } from "framer-motion";

const teamMembers = [
	{
		id: 1,
		image:
			"https://badshaagency.netlify.app/static/media/img2.4f1804bf6c4583322af8.jpg",
		name: "Sikder Sakiuzzaman",
		title: "(Chairman)",
		description:
			"Chairman, Adzi Trims Ltd. Experienced in Apparel Accessories Business.",
	},
	{
		id: 2,
		image:
			"https://badshaagency.netlify.app/static/media/img2.4f1804bf6c4583322af8.jpg",
		name: "Golam Mortuza Khan",
		title: "(Managing Director)",
		description:
			"Managing Director, Adzi Trims Ltd. Renowned in the field of accessories industry.",
	},
	{
		id: 3,
		image:
			"https://badshaagency.netlify.app/static/media/img2.4f1804bf6c4583322af8.jpg",
		name: "Al Shahriar Ahmed",
		title: "(Director)",
		description:
			"Director, Adzi Trims Ltd. Renowned in the field of accessories industry.",
	},
];

function FamilyMember() {
	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
		<main className="w-full py-20 bg-gradient-to-b from-gray-50 to-white font-[GeologicaFont]">
			<div className="xl:w-[1230px] w-[96%] mx-auto px-6">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center text-gray-800 mb-12">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
						Our <span className="text-[#018496]">Family</span>
					</h1>
					<p className="text-[#c9EB61] text-lg md:text-xl mt-2 font-medium">
						A Well-Seasoned Team At The Helm
					</p>
					<motion.div
						variants={underlineVariants}
						initial="hidden"
						animate="visible"
						className="h-1 bg-[#018496] rounded-full mx-auto mt-4"
					/>
				</motion.div>

				{/* Team Members */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="flex flex-wrap justify-center gap-8">
					{teamMembers.map(member => (
						<motion.div
							key={member.id}
							variants={cardVariants}
							whileHover="hover"
							className="w-[320px] bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center transition-all duration-300 group relative">
							{/* Image */}
							<div className="relative w-full h-[200px]">
								<motion.img
									src={member.image}
									alt={member.name}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
									initial={{ scale: 1 }}
									whileHover={{ scale: 1.1 }}
								/>
								{/* Overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-[#018496]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							</div>

							{/* Text Content */}
							<motion.div variants={textVariants} className="text-center p-6">
								<h3 className="text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-[#018496] transition-colors duration-300">
									{member.name}
								</h3>
								<p className="text-[#c9EB61] text-sm md:text-base font-medium mt-1">
									{member.title}
								</p>
								<p className="text-gray-600 text-sm md:text-base mt-2 leading-relaxed">
									{member.description}
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
			</div>
		</main>
	);
}

export default FamilyMember;
