import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Using Link for SPA navigation
import { FaExclamationTriangle } from "react-icons/fa"; // Adding an icon for visual appeal

const Errorpage = () => {
	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	const textVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
	};

	const buttonVariants = {
		hover: { scale: 1.05, backgroundColor: "#016f80" },
		tap: { scale: 0.95 },
	};

	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 px-4">
			{/* Icon */}
			<motion.div
				initial={{ opacity: 0, rotate: -10 }}
				animate={{
					opacity: 1,
					rotate: 0,
					transition: { duration: 0.5, delay: 0.4 },
				}}
				className="text-[#018496] mb-6">
				<FaExclamationTriangle className="text-8xl md:text-9xl" />
			</motion.div>

			{/* Title */}
			<motion.h1
				variants={textVariants}
				className="text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight drop-shadow-md text-center">
				404 - Page Not Found
			</motion.h1>

			{/* Description */}
			<motion.p
				variants={textVariants}
				className="mt-4 text-lg md:text-xl text-gray-600 text-center max-w-md">
				Oops! It looks like the page you’re looking for doesn’t exist or has
				been moved.
			</motion.p>

			{/* Back to Home Button */}
			<motion.div
				variants={buttonVariants}
				whileHover="hover"
				whileTap="tap"
				transition={{ duration: 0.3 }}
				className="mt-8">
				<Link
					to="/"
					className="bg-[#018496] text-white font-semibold text-base md:text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center">
					<span>Back to Home</span>
				</Link>
			</motion.div>

			{/* Decorative Element */}
			<motion.div
				initial={{ width: 0 }}
				animate={{ width: "200px" }}
				transition={{ duration: 1, delay: 0.6 }}
				className="mt-6 h-1 bg-[#018496] rounded-full"
			/>
		</motion.div>
	);
};

export default Errorpage;
