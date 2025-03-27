import { useState } from "react";
import { FaChevronDown, FaPowerOff } from "react-icons/fa6";
import { GoChevronRight } from "react-icons/go";
import { ImHome } from "react-icons/im";
import { Navigate, NavLink } from "react-router-dom";

const ASideNav = ({ data }) => {
	const [openDropdown, setOpenDropdown] = useState(null);
	const [handleLogout, setHandleLogout] = useState(false);

	if (handleLogout) {
		localStorage.removeItem("authToken");
		return <Navigate to="/login" replace={true} />;
	}

	const menuItemsDashboard = [
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
	];

	return (
		<div className="h-screen flex flex-col  shadow-[0px_0px_3px_0px_#0003]">
			<div className="flex-grow overflow-y-auto pt-[5.5rem] pb-[3.5rem]">
				{/* Admin Info */}
				<div className="flex items-center px-[20px]">
					<div className="w-[2.5rem] h-[2.5rem] relative mr-[10px]">
						<img
							alt="profile"
							className="w-[2.5rem] h-[2.5rem] bg-gray-100 object-cover rounded-full"
							src={data?.profileImg}
						/>
						<div className="w-[10px] h-[10px] absolute bottom-0 right-0 rounded-full bg-[#3dff6a] border-[2px] border-white"></div>
					</div>
					<div className="flex-grow">
						<h2 className="text-gray-900 font-medium text-[14px]">
							{data?.name}
						</h2>
						<p className="text-gray-500 text-[12px]">{data?.role}</p>
					</div>
				</div>

				{/* Navigation */}
				<div className="pt-[1rem] space-y-1 px-[20px]">
					<NavLink
						to={`/${data?.role}/dashboard`}
						className={({ isActive }) =>
							isActive
								? "flex items-center justify-between py-[1rem] rounded-md text-[14px] font-medium text-[#018496]"
								: "flex items-center justify-between py-[1rem] rounded-md text-[14px] font-medium text-gray-700 hover:text-[#018496]"
						}>
						Dashboard
						<ImHome className="h-[14px] w-[14px]" />
					</NavLink>

					{menuItemsDashboard.map(item =>
						!item.subItems ? (
							<NavLink
								key={item.name}
								to={item.path}
								className={({ isActive }) =>
									isActive
										? "block py-[1rem] rounded-md text-[14px] font-medium text-[#018496]"
										: "block py-[1rem] rounded-md text-[14px] font-medium text-gray-700 hover:text-[#018496]"
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
									className="w-full flex items-center justify-between px-3 py-2 rounded-md text-[14px] font-medium text-gray-700 hover:text-[#018496]">
									{item.name}
									<FaChevronDown
										className={`h-[14px] w-[14px] transition-transform ${
											openDropdown === item.name ? "rotate-180" : ""
										}`}
									/>
								</button>
								<div
									className={`ml-4 mb-[10px] transition-all duration-300 ${
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
													onClick={() => setOpenDropdown(null)}
													className={({ isActive }) =>
														isActive
															? "flex items-center justify-between py-2 rounded-md text-[14px] font-[400] text-[#018496]"
															: "flex items-center justify-between py-2 rounded-md text-[14px] font-[400] text-gray-700 hover:text-[#018496]"
													}>
													{subItem.name}
													<GoChevronRight className="h-[14px] w-[14px]" />
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

			{/* Logout Button - Fixed at Bottom */}
			<div className="pb-4  px-6">
				<button
					onClick={() => {
						const confirmBox = window.confirm("Do you really want to Logout?");
						if (confirmBox) {
							setHandleLogout(true);
						}
					}}
					className="flex items-center text-red-600 py-3 px-[20px] hover:bg-gray-100 rounded-md w-full">
					<p className="text-[14px] font-[500] pr-[5px]">Logout </p>
					<FaPowerOff className="text-[13px]" />
				</button>
			</div>
		</div>
	);
};

export default ASideNav;
