import { motion } from "framer-motion";

// DynamicBanner Component
function DynamicBanner({ bg, webTittle, tittle }) {
	// Base classes for typography
	const titleClasses =
		"font-[500] text-[1.5rem] GeologicaFont drop-shadow-[0_0_2px_rgba(0,0,0,0.8)] tracking-wide";
	const headingClasses =
		"xl:!text-[4.5rem] lg:!text-[4rem] md:!text-[3.5rem] sm:!text-[3rem] [@media(min-width:400px)]:text-[2.5rem] text-[2rem]";

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
	};

	const textVariants = {
		hidden: { opacity: 0, y: 50, scale: 0.9 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
		},
	};

	const underlineVariants = {
		hidden: { width: 0 },
		visible: { width: "150px", transition: { duration: 0.8, delay: 0.6 } },
	};

	return (
		<motion.main
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			className="w-full lg:h-[80vh] md:h-[70vh] sm:h-[60vh] h-[40vh] flex items-center justify-center relative overflow-hidden"
			style={{
				backgroundImage: `url(${bg})`,
				backgroundAttachment: "fixed",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}>
			{/* Background Overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-[#2c3e50]/50 to-[#018496]/70 z-0" />

			{/* Content */}
			<div className="relative w-full h-full flex items-center justify-center text-white z-10 px-6">
				<motion.div className="text-center">
					{/* Conditionally render the first title */}
					{webTittle && (
						<motion.h1
							variants={textVariants}
							initial="hidden"
							animate="visible"
							className={`${titleClasses} ${headingClasses} font-extrabold`}>
							AR-Labels &{" "}
							<span className="text-orange-400">
								{tittle ? <>{tittle}</> : "Trims Ltd."}
							</span>
							<motion.div
								variants={underlineVariants}
								initial="hidden"
								animate="visible"
								className="h-1 bg-orange-400 rounded-full mx-auto mt-4"
							/>
						</motion.h1>
					)}

					{/* Conditionally render the second title */}
					{!webTittle && (
						<motion.h1
							variants={textVariants}
							initial="hidden"
							animate="visible"
							className={`${titleClasses} ${headingClasses} text-[#c9eb61] font-extrabold`}>
							{tittle}
							<motion.div
								variants={underlineVariants}
								initial="hidden"
								animate="visible"
								className="h-1 bg-[#018496] rounded-full mx-auto mt-4"
							/>
						</motion.h1>
					)}
				</motion.div>

				{/* Subtle Decorative Particles */}
				<motion.div
					className="absolute inset-0 pointer-events-none z-0"
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.3, transition: { duration: 1 } }}>
					<div className="absolute top-10 left-10 w-2 h-2 bg-[#c9eb61] rounded-full animate-pulse" />
					<div className="absolute bottom-20 right-20 w-3 h-3 bg-[#018496] rounded-full animate-pulse delay-200" />
					<div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-400" />
				</motion.div>
			</div>
		</motion.main>
	);
}

export default DynamicBanner;
