import { motion } from "framer-motion";

const Experience = () => {
	const experienceData = [
		{
			id: 1,
			tittle: "954+",
			description: "fashion, homeware and sportswear brand partners",
		},
		{
			id: 2,
			tittle: "401+",
			description: "clothing brands helped by us to become more sustainable",
		},
		{
			id: 3,
			tittle: "8+",
			description: "production facilities around the world",
		},
	];

	return (
		<div className="relative w-full text-white bg-[#018496]">
			<div className="xl:w-[1180px] w-[100%] h-[100%] flex flex-wrap justify-center items-center mx-auto GeologicaFont [@media(min-width:580px)]:pt-[15px] pt-[0px] [@media(min-width:580px)]:pb-[15px] pb-[5px]">
				{experienceData.map((item, index) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }} 
						transition={{ duration: 0.3, delay: index * 0.1 }}
						viewport={{ once: false }} 
						className="[@media(min-width:580px)]:w-[300px] w-[260px] flex flex-row items-center justify-start text-left mx-auto [@media(min-width:580px)]:pt-[10px] pt-[2px] [@media(min-width:580px)]:pb-[10px] pb-[2px] px-[5px]">
						<h3 className="[@media(min-width:580px)]:text-[23px] text-[15px] [@media(min-width:580px)]:w-[56px] w-[40px] font-semibold mt-[-5px] text-white text-center">
							{item.tittle}
						</h3>
						<p className="[@media(min-width:580px)]:text-[15px] [@media(min-width:400px)]:text-[13px] text-[12px] mt-2 pl-[10px] text-[#efefef]">
							{item.description}
						</p>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Experience;
