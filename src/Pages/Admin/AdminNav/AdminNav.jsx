// src/components/Navbar.jsx
import { useState } from "react";
import { Navigate, NavLink, useLocation } from "react-router-dom";
import { FaChevronDown, FaPowerOff } from "react-icons/fa6";
import logo from "../../../Assets/logo.png";
import { RxCross2 } from "react-icons/rx";
import { ImHome } from "react-icons/im";
import { GoChevronRight } from "react-icons/go";
import { FaTimes } from "react-icons/fa";

const AdminDashboardNav = ({ data }) => {
	const [showLeftNav, setshowLeftNav] = useState(true);

	const [openDropdown, setOpenDropdown] = useState(null);
	const [handleLogout, setHandleLogout] = useState(false);
	const location = useLocation();

	if (handleLogout) {
		localStorage.removeItem("authToken");
		return <Navigate to="/login" replace={true} />;
	}

	// Left Nav
	const menuItemsDashboard = [
		// {
		// 	name: "About Us",
		// 	subItems: [
		// 		// { name: 'About Us', path: '/aboutUs' },
		// 		{ name: "Our Company", path: "/about-our-company" },
		// 		{ name: "Mission & Vision", path: "/about-mission-vision" },
		// 		{ name: "AR Labels Family", path: "/about-ar-labels-family" },
		// 		{ name: "Ethics & Values", path: "/about-ethics-values" },
		// 		{ name: "Affiliations", path: "/about-affiliations" },
		// 		{ name: "Client References", path: "/about-client-references" },
		// 	],
		// },
		{
			name: "Banner Management",
			subItems: [
				{
					name: "Banner",
					path: `/${data?.role}/banner`,
				},
			],
		},
		{
			name: "Product & Solutions",
			subItems: [
				{
					name: "All Product",
					path: `/${data?.role}/product-solutions/all-products`,
				},
				{
					name: "Add Product",
					path: `/${data?.role}/product-solutions/add-product`,
				},
			],
		},
		// {
		// 	name: "Sustainability",
		// 	subItems: [{ name: "Certifications", path: "/certifications" }],
		// },
		// {
		// 	name: "News & Events",
		// 	subItems: [{ name: "Our News & Events", path: "/news-events" }],
		// },
		// {
		// 	name: "Careers",
		// 	subItems: [
		// 		{ name: "Available Positions", path: "/careers/available_positions" },
		// 		{ name: "Apply Online", path: "/careers/apply-online" },
		// 	],
		// },
	];
	return (
		<>
			{/* Dashboard Top Nav */}
			<div
				data-aos="fade-down"
				className="w-full flex flex-col  top-[0px] z-50 GeologicaFont">
				<nav
					className={` w-full relative bg-white shadow-[0px_0px_3px_0px_#0003]
        `}
					style={{ transition: ".1s ease-in" }}>
					<div className="mx-auto">
						<div className="flex justify-between items-center h-[4rem] sm:pr-[2rem] pr-[1rem]">
							{/* Logo */}
							<div className="[@media(min-width:850px)]:w-[15rem] w-[11rem] flex justify-center">
								<NavLink to="/">
									<img
										className="[@media(min-width:850px)]:h-[35px] h-[30px] w-auto"
										src={logo}
										alt="Company Logo"
									/>
								</NavLink>
							</div>

							<RxCross2
								onClick={() => setshowLeftNav(false)}
								className={`${
									showLeftNav
										? "[@media(min-width:1400px)]:hidden flex "
										: "hidden"
								} h-[22px] w-[22px] ml-[1rem]  cursor-pointer text-gray-500`}
							/>

							<FaTimes
								onClick={() => setshowLeftNav(true)}
								className={`${
									showLeftNav
										? "hidden"
										: "[@media(min-width:1400px)]:hidden flex"
								} h-[22px] w-[22px] ml-[1rem]  cursor-pointer text-gray-500`}
							/>
						</div>
					</div>
				</nav>
			</div>

			{/* Dashboard Left Nav */}
			<div
				className={`w-[15rem] ${
					showLeftNav ? "flex" : "hidden"
				} flex-col   top-0 left-[0px] z-[40] GeologicaFont`}>
				<nav
					className={` w-full relative bg-white shadow-[0px_0px_3px_0px_#0003]
        `}
					style={{ transition: ".1s ease-in" }}>
					<div className="mx-auto">
						<div
							className="flex flex-col justify-between max-h-[100vh] h-[100vh] w-full overflow-y-auto pt-[5.5rem] pb-[3.5rem] relative"
							id="AdminDashboardLeftNav">
							<div className="w-full ">
								{/* Admin Info */}
								<div className="flex items-center px-[20px]">
									<div className="w-[2.5rem] h-[2.5rem] relative mr-[10px]">
										<img
											alt="team"
											className="w-[2.5rem] h-[2.5rem] bg-gray-100 object-cover object-center flex-shrink-0 rounded-full "
											src={data?.profileImg}
										/>
										<div className="w-[10px] h-[10px] absolute bottom-0 right-0 rounded-[50%] bg-[#3dff6a] border-[2px] border-[#fff]"></div>
									</div>
									<div className="flex-grow">
										<h2 className="text-gray-900 font-medium text-[14px]">
											{data?.name}
										</h2>
										<p className="text-gray-500 text-[12px]">{data?.role}</p>
									</div>
								</div>
								{/* Nav Item */}
								<div className="pt-[1rem] space-y-1 px-[20px] z-[1] relative">
									<NavLink
										to={`/${data?.role}/dashboard`}
										className={({ isActive }) =>
											isActive
												? "flex items-center justify-between py-[1rem] rounded-md text-[14px] font-medium text-[#018496]  "
												: "flex items-center justify-between py-[1rem] rounded-md text-[14px] font-medium text-gray-700 hover:text-[#018496]  "
										}>
										Dashboard
										<ImHome className={`h-[14px] w-[14px]`} />
									</NavLink>

									{menuItemsDashboard.map(item =>
										!item.subItems ? (
											<NavLink
												key={item.name}
												to={item.path}
												className={({ isActive }) =>
													isActive
														? "block py-[1rem] rounded-md text-[14px] font-medium text-[#018496] "
														: "block py-[1rem] rounded-md text-[14px] font-medium text-gray-700 hover:text-[#018496] "
												}>
												{item.name}
											</NavLink>
										) : (
											<div key={item.name}>
												<button
													onClick={() =>
														setOpenDropdown(
															openDropdown === item.name ? null : item.name
														)
													}
													className={`w-full flex items-center justify-between px-3 py-2 rounded-md [@media(min-width:800px)]:text-[15px] text-[14px] font-medium text-gray-700 hover:text-[#018496]  focus:outline-none ${
														item.subItems.some(subItem =>
															location.pathname.startsWith(subItem.path)
														)
															? "text-[#018496] "
															: "text-gray-700 hover:text-[#018496] "
													}`}>
													{item.name}
													<FaChevronDown
														className={`h-[14px] w-[14px] transition-transform ${
															openDropdown === item.name
																? "transform rotate-180"
																: ""
														}`}
													/>
												</button>
												<div
													className={`ml-4 mb-[10px] transition-all duration-300 ease-in-out transform ${
														openDropdown === item.name
															? "opacity-100 translate-y-0"
															: "opacity-0 -translate-y-2 pointer-events-none"
													}`}>
													{openDropdown === item.name && (
														<div className="ml-[5px]">
															{item.subItems.map(subItem => (
																<NavLink
																	key={subItem.name}
																	to={subItem.path}
																	onClick={() => {
																		setOpenDropdown(null);
																	}}
																	className={({ isActive }) =>
																		isActive
																			? "flex items-center justify-between py-2 rounded-md text-[14px] font-[400] text-[#018496] "
																			: "flex items-center justify-between py-2 rounded-md text-[14px] font-[400] text-gray-700 hover:text-[#018496] "
																	}>
																	{subItem.name}
																	<GoChevronRight
																		className={`h-[14px] w-[14px]`}
																	/>
																</NavLink>
															))}
														</div>
													)}
												</div>
											</div>
										)
									)}
								</div>
							</div>
						</div>
					</div>
				</nav>
				<div
					className={`w-[233px] ${
						showLeftNav ? "flex" : "hidden"
					} bg-white absolute bottom-0 left-0 h-[3.5rem] items-center shadow-[0px_-2px_3px_-2px_#0003] pl-[20px] z-[41]`}>
					<button
						onClick={() => {
							const confirmBox = window.confirm(
								`Do you really want to Logout?`
							);
							{
								confirmBox === true
									? setHandleLogout(true)
									: setHandleLogout(false);
							}
						}}
						className="flex items-center text-red-600">
						<p className="text-[14px] font-[500] pr-[5px]">Logout</p>
						<FaPowerOff className="text-[13px]" />
					</button>
				</div>
			</div>
		</>
	);
};

export default AdminDashboardNav;
