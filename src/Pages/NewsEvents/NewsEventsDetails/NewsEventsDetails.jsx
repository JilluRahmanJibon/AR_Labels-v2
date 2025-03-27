import { motion } from "framer-motion";

// Static News & Events Data
const NewsEventsData = [
	{
		id: 1,
		img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/news_image_upload_news_and_events_1548318413_1548318413.png",
		title:
			"AR-Labels & Trims Ltd. won the “1st Prize for the best stall of GAPEXPO”",
	},
	{
		id: 2,
		img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/news_image_upload_news_and_events_1548334567_1548334567.jpg",
		title: "Adzi Trims stall for GAPEXPO 2019!",
	},
	{
		id: 3,
		img: "https://www.adzitrims.com/sul-web-cms-adzi/upload/news_image_upload_news_and_events_1548334896_1548334896.jpg",
		title: "Prize receiving of GAPEXPO 2019!",
	},
];

function NewsEventsDetails() {
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
				{/* Header Section */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center text-gray-800 mb-12">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
						News & <span className="text-[#018496]">Events</span>
					</h1>
					<motion.div
						variants={underlineVariants}
						initial="hidden"
						animate="visible"
						className="h-1 bg-[#018496] rounded-full mx-auto mt-4"
					/>
				</motion.div>

				{/* News & Events Section */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
					{NewsEventsData.map(item => (
						<motion.div
							key={item.id}
							variants={cardVariants}
							whileHover="hover"
							className="w-full max-w-[360px] bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 group relative mx-auto">
							{/* News Image */}
							<div className="w-full h-[250px] overflow-hidden">
								<motion.img
									src={item.img}
									alt={item.title}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
									initial={{ scale: 1 }}
									whileHover={{ scale: 1.1 }}
								/>
								{/* Overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-[#018496]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							</div>

							{/* News Details */}
							<motion.div variants={textVariants} className="text-center p-6">
								<p className="text-orange-400 text-sm md:text-base font-medium">
									(AR-Labels & Trims Ltd)
								</p>
								<h1 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-[#018496] transition-colors duration-300 mt-2">
									{item.title}
								</h1>
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

export default NewsEventsDetails;
