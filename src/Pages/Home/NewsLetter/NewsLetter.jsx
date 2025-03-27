import { motion } from "framer-motion";

function NewsLetter() {
	// Animation variants
	const sectionVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: { opacity: 1, scale: 1 },
	};

	const textVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: { opacity: 1, y: 0 },
	};

	const inputVariants = {
		hidden: { opacity: 0, x: -30 },
		visible: { opacity: 1, x: 0 },
		focus: { borderColor: "#018496", scale: 1.02 },
	};

	return (
		<motion.section
			variants={sectionVariants}
			initial="hidden"
			whileInView="visible"
			transition={{ duration: 0.6 }}
			viewport={{ once: false }}
			className="w-full py-12 md:py-20 bg-[#264d4d] rounded-tr-[6rem] md:rounded-tr-[8rem] overflow-hidden">
			<div className="max-w-[1240px] mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				{/* Text Section */}
				<motion.div
					variants={textVariants}
					initial="hidden"
					whileInView="visible"
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: false }}
					className="text-white max-w-[500px] mx-auto md:mx-0 text-center md:text-left">
					<h1 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight drop-shadow-md">
						Sign Up for Our Newsletter
						<span className="block h-1 w-20 bg-[#018496] rounded-full mt-3 mx-auto md:mx-0"></span>
					</h1>
					<p className="text-sm md:text-base leading-relaxed">
						Stay ahead with industry developments, trends, product launches, and
						more. Subscribe to get the latest delivered straight to your inbox!
					</p>
				</motion.div>

				{/* Form Section */}
				<motion.form
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: false }}
					className="max-w-[500px] mx-auto md:mx-0">
					<div className="grid gap-6 md:grid-cols-2 mb-6">
						{/* First Name */}
						<motion.div
							variants={inputVariants}
							initial="hidden"
							whileInView="visible"
							transition={{ duration: 0.5, delay: 0.5 }}
							viewport={{ once: false }}>
							<label
								htmlFor="first_name"
								className="block mb-2 text-sm font-semibold text-white">
								First Name
							</label>
							<motion.input
								type="text"
								id="first_name"
								className="bg-transparent border-2 border-gray-300 text-white text-sm rounded-lg focus:ring-[#018496] focus:border-[#018496] block w-full p-3 outline-none placeholder-gray-200"
								placeholder="John"
								required
								whileFocus="focus"
								transition={{ duration: 0.3 }}
							/>
						</motion.div>

						{/* Last Name */}
						<motion.div
							variants={inputVariants}
							initial="hidden"
							whileInView="visible"
							transition={{ duration: 0.5, delay: 0.6 }}
							viewport={{ once: false }}>
							<label
								htmlFor="last_name"
								className="block mb-2 text-sm font-semibold text-white">
								Last Name
							</label>
							<motion.input
								type="text"
								id="last_name"
								className="bg-transparent border-2 border-gray-300 text-white text-sm rounded-lg focus:ring-[#018496] focus:border-[#018496] block w-full p-3 outline-none placeholder-gray-200"
								placeholder="Doe"
								required
								whileFocus="focus"
								transition={{ duration: 0.3 }}
							/>
						</motion.div>
					</div>

					{/* Email */}
					<motion.div
						variants={inputVariants}
						initial="hidden"
						whileInView="visible"
						transition={{ duration: 0.5, delay: 0.7 }}
						viewport={{ once: false }}
						className="mb-6">
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-semibold text-white">
							Email Address
						</label>
						<motion.input
							type="email"
							id="email"
							className="bg-transparent border-2 border-gray-300 text-white text-sm rounded-lg focus:ring-[#018496] focus:border-[#018496] block w-full p-3 outline-none placeholder-gray-200"
							placeholder="email123@gmail.com"
							required
							whileFocus="focus"
							transition={{ duration: 0.3 }}
						/>
					</motion.div>

					{/* Submit Button */}
					<motion.button
						type="submit"
						whileHover={{ scale: 1.05, backgroundColor: "#018496" }}
						whileTap={{ scale: 0.95 }}
						className="bg-orange-400 text-black font-semibold text-sm md:text-base px-6 py-3 md:px-8 md:py-4 rounded-full border-2 border-[#c9EB61] hover:bg-transparent hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
						Sign Me Up!
					</motion.button>
				</motion.form>
			</div>
		</motion.section>
	);
}

export default NewsLetter;
