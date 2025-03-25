import { motion } from "framer-motion";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const LandAbout = () => {
	const [isVideoOpen, setIsVideoOpen] = useState(false);

	// Animation variants
	const imageVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: { opacity: 1, scale: 1 },
		hover: { scale: 1.05 },
	};

	const textVariants = {
		hidden: { opacity: 0, x: 50 },
		visible: { opacity: 1, x: 0 },
	};

	const playButtonVariants = {
		hidden: { opacity: 0, scale: 0 },
		visible: { opacity: 1, scale: 1 },
		hover: { scale: 1.2, rotate: 10 },
	};

	return (
		<section className="py-16 md:py-24 bg-white text-gray-800 overflow-hidden">
			<div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-6 md:px-8 relative">
				{/* Subtle Decorative Background Element */}
				<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] opacity-5 pointer-events-none"></div>

				{/* Image/Video Section */}
				<motion.div
					variants={imageVariants}
					initial="hidden"
					whileInView="visible"
					whileHover="hover"
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: false }}
					className="w-[300px] sm:w-[400px] md:w-[500px] max-h-[500px] flex-shrink-0 relative rounded-2xl shadow-xl overflow-hidden z-10 border border-gray-200">
					{!isVideoOpen ? (
						<div className="relative w-full h-full group">
							<img
								src="https://www.arltl.com/web-cms-arltl/uploads/land-about.jpg"
								alt="About Us"
								className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
							/>
							{/* Play Button */}
							<motion.div
								variants={playButtonVariants}
								initial="hidden"
								animate="visible"
								whileHover="hover"
								transition={{ duration: 0.5 }}
								onClick={() => setIsVideoOpen(true)}
								className="absolute inset-0 flex z-50 items-center justify-center cursor-pointer">
								<div className="bg-[#018496]/90 z-50 p-4 rounded-full shadow-lg cursor-pointer hover:bg-[#016f80] transition-all duration-300">
									<FaPlay className="text-white text-3xl md:text-4xl" />
								</div>
							</motion.div>
							<div className="absolute inset-0 bg-gradient-to-t from-gray-800/40 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
						</div>
					) : (
						<div className="w-full h-full relative">
							<video
								className="w-full h-full object-cover rounded-2xl"
								src="https://cdn.pixabay.com/video/2015/11/28/1437-147170155_tiny.mp4" // Replace with your actual video URL
								controls
								autoPlay
								playsInline
								onError={e => console.log("Video error:", e)}>
								Your browser does not support the video tag.
							</video>
							<button
								onClick={() => setIsVideoOpen(false)}
								className="absolute top-4 right-4 bg-[#018496]/90 text-white p-2 rounded-full hover:bg-[#016f80] transition-all duration-300">
								✕
							</button>
						</div>
					)}
				</motion.div>

				{/* Text Section */}
				<motion.div
					variants={textVariants}
					initial="hidden"
					whileInView="visible"
					transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
					viewport={{ once: false }}
					className="md:w-1/2 mt-10 md:mt-0 md:pl-12 p-6 text-center md:text-left z-10">
					<h2 className="font-extrabold text-3xl md:text-5xl text-gray-900 mb-4 md:mb-6 tracking-tight">
						About AR-Labels & Trims Ltd.
					</h2>
					<p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed">
						Founded in 2012 under the Indet Group, AR-Labels & Trims Ltd. is a
						modern leader in apparel trims and accessories. Since 2016, we’ve
						delivered high-quality solutions to Bangladesh’s export-oriented
						garment industries.
					</p>
					<p className="text-base md:text-lg text-gray-700 leading-relaxed">
						Our mission is to provide innovative, world-class accessories with
						cutting-edge technology, a dedicated team, rapid delivery, and
						competitive pricing—all while upholding integrity and customer
						satisfaction.
					</p>
					<motion.a
						href="#learn-more"
						whileHover={{ scale: 1.05, backgroundColor: "#016f80" }}
						whileTap={{ scale: 0.95 }}
						className="inline-block mt-6 px-8 py-3 bg-[#018496] text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300">
						Discover More
					</motion.a>
				</motion.div>
			</div>
		</section>
	);
};

export default LandAbout;
