import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from "./NavItems";
import logo from "../../Assets/logo.png";
import NavTop from "./NavTop";

const Navbar = ({ user }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState(null);
	const [activeLink, setActiveLink] = useState({ parent: null, child: null });
	const [scrolling, setScrolling] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			setScrolling(window.scrollY > 50); // Adjusted for earlier stickiness
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleLinkClick = (parentTitle, subItemTitle = null) => {
		if (subItemTitle) {
			setActiveLink({ parent: parentTitle, child: subItemTitle });
		} else {
			setActiveLink({ parent: parentTitle, child: null });
		}
		setMenuOpen(false); // Close mobile menu on click
	};

	// Animation variants
	const navVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	const linkVariants = {
		hover: { scale: 1.1, color: "#018496" },
		active: { scale: 1.05, color: "#018496", transition: { duration: 0.3 } },
	};

	const dropdownVariants = {
		hidden: { opacity: 0, y: -10, scale: 0.95 },
		visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
	};

	return (
		<motion.nav
			variants={navVariants}
			initial="hidden"
			animate="visible"
			className={`w-full z-50 transition-all duration-500 ${
				scrolling
					? " bg-gradient-to-r from-white via-gray-50 to-white shadow-xl"
					: "bg-white"
			}`}>
			<NavTop user={user} />
			<div className="lg:px-8 px-4 py-4 flex justify-between items-center relative bg-gradient-to-r from-[#018496]/10 via-white to-[#018496]/10 border-b-2 border-[#018496]/20">
				<div className="max-w-7xl w-full mx-auto flex justify-between items-center">
					{/* Logo */}
					<motion.div
						whileHover={{ scale: 1.15, rotate: 5 }}
						transition={{ duration: 0.3 }}
						className="flex justify-center items-center">
						<NavLink to="/" onClick={() => handleLinkClick(null)}>
							<img className="h-10 md:h-12" src={logo} alt="Logo" />
						</NavLink>
					</motion.div>

					{/* Desktop Menu */}
					<div className="hidden lg:flex items-center space-x-10">
						{/* Left Side Menu (menuItems) */}
						{menuItems.map((item, index) => (
							<motion.div
								key={index}
								className="relative group"
								onMouseEnter={() => setActiveDropdown(item.title)}
								onMouseLeave={() => setActiveDropdown(null)}>
								<motion.button
									variants={linkVariants}
									whileHover="hover"
									animate={
										activeLink.parent === item.title ||
										location.pathname.startsWith(item.path)
											? "active"
											: ""
									}
									className="flex items-center text-gray-800 font-bold text-md hover:text-[#018496] transition-colors duration-300"
									onClick={() => handleLinkClick(item.title)}>
									{item.title}
									<FaChevronDown className="ml-2 text-sm group-hover:rotate-180 transition-transform duration-300" />
								</motion.button>
								<AnimatePresence>
									{activeDropdown === item.title && (
										<motion.div
											variants={dropdownVariants}
											initial="hidden"
											animate="visible"
											exit="hidden"
											className="absolute left-0 mt-4 bg-white shadow-2xl rounded-xl p-4 w-64 border-t-4 border-[#018496] z-[100] overflow-hidden">
											{item.subItems.map((subItem, subIndex) => (
												<NavLink
													key={subIndex}
													to={subItem.path}
													className={`block px-4 py-3 text-gray-700 font-medium hover:bg-[#018496] hover:text-white rounded-md transition-all duration-300 ${
														activeLink.child === subItem.title ||
														location.pathname === subItem.path
															? "bg-[#018496] text-white"
															: ""
													}`}
													onClick={() =>
														handleLinkClick(item.title, subItem.title)
													}>
													{subItem.title}
												</NavLink>
											))}
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						))}

						{/* Contact Us Button */}
						<motion.div
							whileHover={{
								scale: 1.1,
							}}
							whileTap={{ scale: 0.95 }}
							className="ml-4">
							<NavLink
								to="/contact-us"
								className="bg-[#018496] text-white font-bold text-lg px-8 py-3 rounded-full border-2 border-[#018496] hover:bg-transparent hover:text-[#018496] transition-all duration-300 shadow-lg">
								Contact Us
							</NavLink>
						</motion.div>
					</div>

					{/* Mobile Menu Button */}
					<motion.div
						whileHover={{ scale: 1.2, rotate: 90 }}
						whileTap={{ scale: 0.9 }}
						className="lg:hidden text-3xl text-[#018496]">
						<button onClick={() => setMenuOpen(!menuOpen)}>
							{menuOpen ? <FaTimes /> : <FaBars />}
						</button>
					</motion.div>
				</div>

				{/* Mobile Menu */}
				<AnimatePresence>
					{menuOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.4 }}
							className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-6 border-t-4 border-[#018496] z-50">
							{menuItems.map((item, index) => (
								<div key={index} className="px-6 py-4 border-b border-gray-200">
									<button
										className="flex justify-between w-full text-gray-800 font-bold text-lg hover:text-[#018496] transition-colors duration-300"
										onClick={() =>
											setActiveDropdown(
												activeDropdown === item.title ? null : item.title
											)
										}>
										{item.title}
										<FaChevronDown
											className={`text-base transition-transform duration-300 ${
												activeDropdown === item.title ? "rotate-180" : ""
											}`}
										/>
									</button>
									<AnimatePresence>
										{activeDropdown === item.title && (
											<motion.div
												initial={{ opacity: 0, y: -10 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: -10 }}
												transition={{ duration: 0.3 }}
												className="ml-4 mt-2">
												{item.subItems.map((subItem, subIndex) => (
													<NavLink
														key={subIndex}
														to={subItem.path}
														className="block px-4 py-3 text-gray-700 font-medium hover:bg-[#018496] hover:text-white rounded-md transition-all duration-300"
														onClick={() =>
															handleLinkClick(item.title, subItem.title)
														}>
														{subItem.title}
													</NavLink>
												))}
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							))}
							<div className="px-6 py-6">
								<NavLink
									to="/contact-us"
									className="block w-full text-center bg-[#018496] text-white font-bold text-lg px-8 py-3 rounded-full border-2 border-[#018496] hover:bg-transparent hover:text-[#018496] transition-all duration-300 shadow-lg"
									onClick={() => setMenuOpen(false)}>
									Contact Us
								</NavLink>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.nav>
	);
};

export default Navbar;
