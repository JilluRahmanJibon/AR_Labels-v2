import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems, menuItems2 } from "./NavItems";
import logo from "../../Assets/logo.png";
import NavTop from "./NavTop";

const Navbar = ({ data, user }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState(null);
	const [activeLink, setActiveLink] = useState({ parent: null, child: null });
	const [scrolling, setScrolling] = useState(false);
	const location = useLocation();
	const [isTop, setIsTop] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;

			if (currentScrollPos > 200) {
				setScrolling(true);
			} else {
				setScrolling(false);
			}

			if (currentScrollPos === 0) {
				setIsTop(true);
			} else {
				setIsTop(false);
			}
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
	};

	const oldMenu = data?.map(item => ({
		title: item.title,
		path: `/products/${item._id}`,
	}));

	const updatedMenuItems = menuItems?.map(item => {
		if (item.title === "Product & Solutions") {
			return {
				...item,
				subItems: oldMenu,
			};
		}
		return item;
	});
	return (
		<AnimatePresence>
			<motion.nav
				className={`w-full transition-all ${
					"" // scrolling && !isTop && "fixed top-0 left-0 z-50 shadow-md"
				}`}>
				<NavTop user={user} />
				<div className="bg-white shadow-md lg:flex-none px-4 flex justify-between items-center relative z-50">
					<div className="max-w-6xl w-full mx-auto  lg:px-8 py-3 flex justify-between items-center">
						{/* Left Side Menu (menuItems) */}
						<div className="hidden lg:flex space-x-6 items-center">
							{updatedMenuItems.map((item, index) => (
								<div
									key={index}
									className={`relative ${
										activeLink.parent === item.title ||
										location.pathname.startsWith(item.path)
											? "text-[#018496]"
											: ""
									}`}
									onMouseEnter={() => setActiveDropdown(item.title)}
									onMouseLeave={() => setActiveDropdown(null)}>
									<button
										className="flex items-center hover:text-[#018496]"
										onClick={() => handleLinkClick(item.title)}>
										{item.title} <FaChevronDown className="ml-1" />
									</button>
									<AnimatePresence>
										{activeDropdown === item.title && (
											<motion.div
												initial={{ opacity: 0, y: -10 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: -10 }}
												className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md z-[100] p-4 w-56">
												{item.subItems.map((subItem, subIndex) => (
													<NavLink
														key={subIndex}
														to={subItem.path}
														className={`block px-4 py-2 hover:bg-gray-100 ${
															activeLink.child === subItem.title ||
															location.pathname.startsWith(subItem.path)
																? "text-[#018496]"
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
								</div>
							))}
						</div>

						{/* Center Logo (Adjusted for Mobile) */}
						<div className="flex justify-center lg:items-center lg:flex-grow">
							<NavLink to="/" onClick={() => handleLinkClick(null)}>
								<img className="h-8 md:h-10" src={logo} alt="Logo" />
							</NavLink>
						</div>

						{/* Right Side Menu (menuItems2) */}
						<div className="hidden lg:flex space-x-6 items-center">
							{menuItems2.map((item, index) => (
								<div
									key={index}
									className={`relative ${
										activeLink.parent === item.title ||
										location.pathname.startsWith(item.path)
											? "text-[#018496]"
											: ""
									}`}
									onMouseEnter={() => setActiveDropdown(item.title)}
									onMouseLeave={() => setActiveDropdown(null)}>
									<button
										className="flex items-center hover:text-[#018496]"
										onClick={() => handleLinkClick(item.title)}>
										{item.title} <FaChevronDown className="ml-1" />
									</button>
									<AnimatePresence>
										{activeDropdown === item.title && (
											<motion.div
												initial={{ opacity: 0, y: -10 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: -10 }}
												className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md z-[100] p-4 w-56">
												{item.subItems.map((subItem, subIndex) => (
													<NavLink
														key={subIndex}
														to={subItem.path}
														className={`block px-4 py-2 hover:bg-gray-100 ${
															activeLink.child === subItem.title ||
															location.pathname.startsWith(subItem.path)
																? "text-[#018496]"
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
								</div>
							))}
							<NavLink
								to={"/contact-Us"}
								className="border-[2px] border-primary bg-[#018496] hover:bg-transparent cursor-pointer outline-none text-white hover:text-[#018496] font-[500] text-sm px-[20px] py-[8px] rounded-[50px] transition-[0.3s] ml-[10px] mr-[5px]">
								Contact Us
							</NavLink>
						</div>
					</div>

					<div>
						{/* Mobile Menu Button */}
						<div className="lg:hidden">
							<button
								onClick={() => setMenuOpen(!menuOpen)}
								className="text-2xl">
								{menuOpen ? <FaTimes /> : <FaBars />}
							</button>
						</div>

						{/* Mobile Menu */}
						<AnimatePresence>
							{menuOpen && (
								<motion.div
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
									className="lg:hidden absolute left-0 mt-3 w-full bg-white shadow-md py-4">
									{updatedMenuItems.concat(menuItems2).map((item, index) => (
										<div key={index} className="px-4 py-2 border-b">
											{/* Toggle active dropdown on click for mobile */}
											<button
												className="flex justify-between w-full hover:text-[#018496]"
												onClick={() =>
													setActiveDropdown(
														activeDropdown === item.title ? null : item.title
													)
												}>
												{item.title} <FaChevronDown />
											</button>

											<AnimatePresence>
												{/* If activeDropdown matches the item's title, show the subItems */}
												{activeDropdown === item.title && (
													<motion.div
														initial={{ opacity: 0, y: -10 }}
														animate={{ opacity: 1, y: 0 }}
														exit={{ opacity: 0, y: -10 }}
														className="ml-4 mt-2">
														{item.subItems.map((subItem, subIndex) => (
															<NavLink
																key={subIndex}
																to={subItem.path}
																onClick={() => setMenuOpen(false)} // Close menu after clicking an item
																className="block px-4 py-2 hover:bg-gray-100">
																{subItem.title}
															</NavLink>
														))}
													</motion.div>
												)}
											</AnimatePresence>
										</div>
									))}
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</motion.nav>
		</AnimatePresence>
	);
};

export default Navbar;
