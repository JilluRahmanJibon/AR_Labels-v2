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

	return (
		<div className="w-full bg-[#018496] text-white py-10">
			<div className="max-w-[1180px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{experienceData.map(item => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg text-center flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl min-h-[120px]">
						{/* Number Section with Fixed Height */}
						<h3 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg min-h-[50px]">
							<CountUp end={parseInt(item.tittle)} duration={5} />+
						</h3>

						{/* Description Section with Defined Space */}
						<p className="text-[14px] sm:text-[16px] text-[#efefef] mt-2 min-h-[40px]">
							{item.description}
						</p>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Experience;
