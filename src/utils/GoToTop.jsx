import { useEffect, useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const GoToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const goToBtn = () => {
		// Scroll to top with smooth behavior, accounting for potential fixed headers
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	const listenToScroll = () => {
		// Use window.scrollY for consistent scroll position detection
		const threshold = 250;
		const windScroll = window.scrollY || window.pageYOffset;
		setIsVisible(windScroll > threshold);
	};

	useEffect(() => {
		window.addEventListener("scroll", listenToScroll, { passive: true }); // Passive for performance
		return () => window.removeEventListener("scroll", listenToScroll);
	}, []);

	// Animation variants
	const buttonVariants = {
		hidden: { opacity: 0, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.4,
				ease: "easeOut",
				when: "beforeChildren",
				staggerChildren: 0.1,
			},
		},
		exit: {
			opacity: 0,
			scale: 0,
			transition: { duration: 0.3, ease: "easeIn" },
		},
		hover: {
			scale: 1.1,
			rotate: 360,
			boxShadow: "0px 10px 20px rgba(1, 132, 150, 0.3)",
			transition: { duration: 0.5 },
		},
	};

	const childVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<div className="fixed bottom-8 right-8 z-50">
			<AnimatePresence>
				{isVisible && (
					<motion.button
						onClick={goToBtn}
						variants={buttonVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						whileHover="hover"
						className="flex items-center justify-center bg-[#018496] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#016f80] focus:outline-none">
						<motion.div variants={childVariants}>
							<BsArrowUpCircle className="w-6 h-6 mr-2" />
						</motion.div>
						<motion.span
							variants={childVariants}
							className="text-sm md:text-base font-semibold whitespace-nowrap">
							Back to Top
						</motion.span>
					</motion.button>
				)}
			</AnimatePresence>
		</div>
	);
};

export default GoToTop;
