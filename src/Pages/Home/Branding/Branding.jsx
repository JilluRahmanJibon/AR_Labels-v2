import React, { useMemo } from "react";
import Marquee from "react-fast-marquee";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

// Import brand logos
import brandLogo1 from "../../../Assets/brand/brandLogo4.png";
import brandLogo2 from "../../../Assets/brand/brandLogo8.png";
import brandLogo3 from "../../../Assets/brand/brandLogo3.png";
import brandLogo4 from "../../../Assets/brand/brandLogo1.png";
import brandLogo5 from "../../../Assets/brand/brandLogo5.png";
import brandLogo6 from "../../../Assets/brand/brandLogo6.png";
import brandLogo7 from "../../../Assets/brand/brandLogo7.png";
import brandLogo8 from "../../../Assets/brand/brandLogo2.png";
import brandLogo9 from "../../../Assets/brand/brandLogo9.png";
import brandLogo10 from "../../../Assets/brand/brandLogo11.png";
import brandLogo11 from "../../../Assets/brand/brandLogo10.png";

// Memoized brand logo data
const brandLogoData = [
	{ id: 1, image: brandLogo1 },
	{ id: 2, image: brandLogo2 },
	{ id: 3, image: brandLogo3 },
	{ id: 4, image: brandLogo4 },
	{ id: 5, image: brandLogo5 },
	{ id: 6, image: brandLogo6 },
	{ id: 7, image: brandLogo7 },
	{ id: 8, image: brandLogo8 },
	{ id: 9, image: brandLogo9 },
	{ id: 10, image: brandLogo10 },
	{ id: 11, image: brandLogo11 },
];

// Memoized LogoItem Component
const LogoItem = React.memo(({ keyData }) => {
	return (
		<motion.div
			whileHover={{ scale: 1.1, rotate: 5 }}
			transition={{ duration: 0.3 }}
			className="w-[60px] md:w-[80px] mx-6 md:mx-8 shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:border-[#018496]/50">
			<img
				src={keyData.image}
				className="w-full h-auto"
				alt="brand logo"
				loading="lazy"
			/>
		</motion.div>
	);
});

LogoItem.displayName = "LogoItem";
LogoItem.propTypes = {
	keyData: PropTypes.shape({
		id: PropTypes.number.isRequired,
		image: PropTypes.string.isRequired,
	}).isRequired,
};

const Branding = () => {
	// Memoized logo items
	const logoItems = useMemo(
		() => brandLogoData.map(item => <LogoItem key={item.id} keyData={item} />),
		[]
	);

	return (
		<section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
			<div className="max-w-[1240px] mx-auto px-6 md:px-8">
				{/* Animated Title Section */}
				<motion.div
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: false }}
					className="text-center mb-12">
					<h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight drop-shadow-md">
						Sustainable Branding
						<span className="block text-2xl md:text-3xl font-semibold mt-2">
							From Stitch to Store
						</span>
						<span className="block h-1 w-24 bg-[#018496] rounded-full mx-auto mt-4"></span>
					</h1>
				</motion.div>

				{/* Text and Button Section */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: false }}
					className="max-w-2xl mx-auto text-center mb-12">
					<p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
						Looking to achieve your sustainability and branding targets? We’ll
						help you get there with our range of eco-friendly packaging and
						trims.
					</p>
					<p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
						As your branding partner, we design, develop, and deliver your
						products globally through an infrastructure that benefits you.
					</p>
					<motion.a
						href="#sustainability"
						whileHover={{ scale: 1.05, backgroundColor: "#016f80" }}
						whileTap={{ scale: 0.95 }}
						className="inline-block px-6 py-3 md:px-8 md:py-4 bg-[#018496] text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-sm md:text-base">
						Our Sustainability Commitment
					</motion.a>
				</motion.div>

				{/* Marquee Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: false }}
					className="relative h-[120px] md:h-[150px] flex items-center">
					<Marquee speed={50} gradient={false} className="z-0">
						{logoItems}
					</Marquee>
					{/* Gradient Fades */}
					<div className="absolute top-0 left-0 w-[80px] md:w-[120px] h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
					<div className="absolute top-0 right-0 w-[80px] md:w-[120px] h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
				</motion.div>
			</div>
		</section>
	);
};

export default Branding;
