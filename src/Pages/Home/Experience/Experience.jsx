import { motion } from "framer-motion";
import CountUp from "react-countup";

const Experience = () => {
	const experienceData = [
		{
			id: 1,
			tittle: "954",
			description: "fashion, home ware and sportswear brand partners",
		},
		{
			id: 2,
			tittle: "401",
			description: "clothing brands helped by us to become more sustainable",
		},
		{
			id: 3,
			tittle: "8",
			description: "production facilities around the world",
		},
	];

	// Animation variants for the card
	const cardVariants = {
		hidden: { opacity: 0, y: 50, scale: 0.95 },
		visible: { opacity: 1, y: 0, scale: 1 },
		hover: { scale: 1.05, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)" },
	};

	return (
		<div className="w-full bg-gradient-to-br from-[#018496] via-[#016f80] to-[#015b6b] py-16 text-white">
			<div className="max-w-[1240px] w-full mx-auto px-4">
				{/* Section Header */}
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white drop-shadow-md">
					Our Impact in Numbers
				</motion.h2>

				{/* Experience Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{experienceData.map(item => (
						<motion.div
							key={item.id}
							variants={cardVariants}
							initial="hidden"
							whileInView="visible"
							whileHover="hover"
							transition={{ duration: 0.5, ease: "easeOut" }}
							viewport={{ once: true }}
							className="relative bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl text-center flex flex-col items-center overflow-hidden border border-white/20 hover:border-[#018496]/50">
							{/* Animated Gradient Overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-[#018496]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

							{/* Number Section */}
							<h3 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg z-10">
								<CountUp
									end={parseInt(item.tittle)}
									duration={3}
									separator=","
									className="inline-block"
								/>
								<span className="text-[#ffd700]">+</span>
							</h3>

							{/* Description Section */}
							<p className="text-sm md:text-base text-gray-100 mt-4 font-medium z-10 max-w-[220px]">
								{item.description}
							</p>

							{/* Subtle Decorative Element */}
							<motion.div
								className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#018496] rounded-t-full"
								initial={{ width: 0 }}
								whileInView={{ width: 64 }}
								transition={{ duration: 0.8, delay: 0.2 }}
							/>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Experience;
