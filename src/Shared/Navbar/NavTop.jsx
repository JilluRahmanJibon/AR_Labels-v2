import { Link } from "react-router-dom";
import {
	FaFacebookF,
	FaLinkedinIn,
	FaRegUserCircle,
	FaUserCheck,
} from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";

const NavTop = ({ user }) => {
	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: { opacity: 1, y: 0 },
	};

	const iconVariants = {
		hover: { scale: 1.2, rotate: 360, color: "#ffffff" },
		tap: { scale: 0.9 },
	};

	const linkVariants = {
		hover: { scale: 1.05, color: "#c9EB61" }, // Lime green for contrast
	};

	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			transition={{ duration: 0.5 }}
			className="bg-[#018496] shadow-md">
			<div className="max-w-7xl mx-auto w-full h-[3rem] flex justify-center items-center px-4 sm:px-6">
				<div className="w-full flex justify-between items-center text-white">
					{/* Social Media Icons */}
					<motion.div className="flex items-center gap-3">
						<motion.a
							href="https://www.facebook.com/"
							target="_blank"
							rel="noopener noreferrer"
							variants={iconVariants}
							whileHover="hover"
							whileTap="tap"
							transition={{ duration: 0.3 }}
							className="w-8 h-8 flex justify-center items-center border-2 border-white rounded-full hover:bg-white 	 transition-colors duration-300">
							<FaFacebookF className="text-sm hover:text-[#018496]" />
						</motion.a>
						<motion.a
							href="https://www.linkedin.com/"
							target="_blank"
							rel="noopener noreferrer"
							variants={iconVariants}
							whileHover="hover"
							whileTap="tap"
							transition={{ duration: 0.3 }}
							className="w-8 h-8 flex justify-center items-center border-2 border-white rounded-full hover:bg-white 	 transition-colors duration-300">
							<FaLinkedinIn className="text-sm hover:text-[#018496]" />
						</motion.a>
						<motion.a
							href="https://www.instagram.com/"
							target="_blank"
							rel="noopener noreferrer"
							variants={iconVariants}
							whileHover="hover"
							whileTap="tap"
							transition={{ duration: 0.3 }}
							className="w-8 h-8 flex justify-center items-center border-2 border-white rounded-full hover:bg-white 	 transition-colors duration-300">
							<BsInstagram className="text-sm hover:text-[#018496]" />
						</motion.a>
					</motion.div>

					{/* User/Profile Link */}
					<motion.div
						variants={linkVariants}
						whileHover="hover"
						transition={{ duration: 0.3 }}>
						{user ? (
							<Link
								to={`${user?.role}/dashboard`}
								className="flex items-center text-white hover:text-[#c9EB61] transition-colors duration-300">
								<FaUserCheck className="text-xl md:text-2xl mr-2" />
								<span className="text-sm  md:text-base font-semibold">
									Profile
								</span>
							</Link>
						) : (
							<Link
								to="/login"
								className="flex items-center text-white hover:text-[#c9EB61] transition-colors duration-300">
								<FaRegUserCircle className="text-xl md:text-2xl mr-2" />
								<span className="text-sm md:text-base font-semibold">
									Existing Customers
								</span>
							</Link>
						)}
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default NavTop;
