import { motion } from "framer-motion";
import CompanyImg from "../../../Assets/AboutUs/vision_image_upload__1550049671_1550049671.jpg";
import img1 from "../../../Assets/AboutUs/1.webp";
import img2 from "../../../Assets/AboutUs/2.webp";
import img3 from "../../../Assets/AboutUs/3.webp";
import img4 from "../../../Assets/AboutUs/4.webp";
import img5 from "../../../Assets/AboutUs/5.webp";
import img6 from "../../../Assets/AboutUs/6.webp";

const OurCompanyDetails = () => {
	const aboutItems = [
		{ img: img1, text: "Maintain integrity" },
		{ img: img2, text: "Take ownership" },
		{ img: img3, text: "Keep agile" },
		{ img: img4, text: "Exceed expectations" },
		{ img: img6, text: "Remain humble" },
		{ img: img5, text: "Continuous innovation" },
	];

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
		hover: { scale: 1.05, transition: { duration: 0.3 } },
	};

	const textVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
	};

	const underlineVariants = {
		hidden: { width: 0 },
		visible: { width: "100px", transition: { duration: 0.8, delay: 0.4 } },
	};

	return (
		<main className="bg-gradient-to-b from-gray-50 to-white font-geologica">
			{/* Values Section */}
			<motion.section
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="max-w-[1230px] w-[96%] mx-auto py-12 px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
				{aboutItems.map((item, index) => (
					<motion.div
						key={index}
						variants={itemVariants}
						whileHover="hover"
						className="flex flex-col justify-center items-center text-center group">
						<motion.img
							src={item.img}
							alt={item.text}
							className="w-[80px] sm:w-[90px] lg:w-[100px] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
							loading="lazy"
						/>
						<p className="text-sm sm:text-base lg:text-lg font-medium text-gray-800 group-hover:text-[#018496] transition-colors duration-300">
							{item.text}
						</p>
					</motion.div>
				))}
			</motion.section>

			{/* Company Overview Section */}
			<section className="max-w-[1230px] w-[96%] mx-auto py-16 ">
				{/* Header */}
				<motion.header
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center text-gray-800 relative z-10 pb-10">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
						Our <span className="text-[#018496]">Company</span>
					</h1>
					<motion.div
						variants={underlineVariants}
						initial="hidden"
						animate="visible"
						className="h-1 bg-[#018496] rounded-full mx-auto mt-4"
					/>
				</motion.header>

				{/* Content */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className=" space-y-3 rounded-xl shadow-lg bg-white p-6 overflow-hidden">
					{/* Image */}
					<motion.div variants={itemVariants} className="relative">
						<img
							src={CompanyImg}
							alt="Company Overview"
							className="w-full h-[250px] object-cover rounded-lg shadow-md"
							loading="lazy"
						/>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 0.2 }}
							className="absolute inset-0 bg-[#018496] rounded-lg"
						/>
					</motion.div>

					{/* Text */}
					<motion.div variants={textVariants} className="text-gray-700">
						<p className="text-base md:text-lg lg:text-xl text-justify leading-relaxed">
							<b className="text-[#018496]">AR Labels & Trims Ltd.</b> is a
							leading garments accessories company that has been serving the
							thriving export-oriented garments industry in Bangladesh since
							2013. We are committed to providing top-notch backward linkage
							support to the country’s bustling apparel sector. At AR Labels &
							Trims Ltd., we specialize in the manufacturing and supply of
							high-quality garments accessories, including labels, trims, hang
							tags, and more.
						</p>
						<p className="text-base md:text-lg lg:text-xl text-justify leading-relaxed mt-4">
							With state-of-the-art machinery and a dedicated team of skilled
							professionals, we ensure the production of accessories that meet
							international standards. Our primary objective is to enhance the
							overall appeal and functionality of clothing products through
							exceptional, customized solutions tailored to our clients’
							specific requirements and branding guidelines.
						</p>
						<p className="text-base md:text-lg lg:text-xl text-justify leading-relaxed mt-4">
							Quality is at the forefront of everything we do. We implement
							stringent quality control measures at every stage of production,
							ensuring on-time delivery and exceptional customer service. As a
							customer-centric company, we prioritize building strong
							relationships, offering innovative solutions, and maintaining a
							reliable distribution network both domestically and
							internationally.
						</p>
						<p className="text-base md:text-lg lg:text-xl text-justify leading-relaxed mt-4">
							With a continuous focus on innovation, productivity, and quality
							improvement, AR Labels & Trims Ltd. has established itself as a
							trusted name in the garments accessories industry. We take pride
							in our accomplishments and look forward to serving our valued
							clients with unwavering dedication and excellence.
						</p>
					</motion.div>
				</motion.div>
			</section>
		</main>
	);
};

export default OurCompanyDetails;
