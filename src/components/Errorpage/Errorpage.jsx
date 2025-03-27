import { motion } from "framer-motion";
import { Link, useRouteError } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
	const error = useRouteError(); // Get error details from React Router
	console.error("Error details:", error); // Log for debugging

	// Determine error message and title based on the error object
	const errorTitle =
		error?.status === 404
			? "404 - Page Not Found"
			: "Oops! Something Went Wrong";
	const errorMessage =
		error?.status === 404
			? error?.statusText ||
			  "The page you’re looking for doesn’t exist or has been moved."
			: error?.message ||
			  "An unexpected error occurred. Please try again later.";

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

	const iconVariants = {
		animate: {
			rotate: [0, 5, -5, 0],
			transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
		},
	};

	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 px-4">
			{/* Icon */}
			<motion.div
				variants={iconVariants}
				animate="animate"
				className="text-[#018496] mb-6">
				<FaExclamationTriangle className="text-8xl md:text-9xl drop-shadow-[0_0_10px_rgba(1,132,150,0.5)]" />
			</motion.div>

			{/* Title */}
			<motion.h1
				variants={textVariants}
				className="text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight drop-shadow-md text-center">
				{errorTitle}
			</motion.h1>

			{/* Description */}
			<motion.p
				variants={textVariants}
				className="mt-4 text-lg md:text-xl text-gray-600 text-center max-w-md">
				{errorMessage}
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
				className="mt-6 h-1 bg-gradient-to-r from-[#018496] to-[#c9EB61] rounded-full shadow-[0_0_10px_rgba(201,235,97,0.5)]"
			/>
		</motion.div>
	);
};

export default ErrorPage;
