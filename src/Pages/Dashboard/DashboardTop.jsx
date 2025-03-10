import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/logo.png";
import { RxCross2 } from "react-icons/rx";

const DashboardTop = ({ showSideNav, setSideNav }) => {
	return (
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
							onClick={() => setSideNav(false)}
							className={`${
								showSideNav
									? "[@media(min-width:1400px)]:hidden flex "
									: "hidden"
							} h-[22px] w-[22px] ml-[1rem]  cursor-pointer text-gray-500`}
						/>

						<FaTimes
							onClick={() => setSideNav(true)}
							className={`${
								showSideNav
									? "hidden"
									: "[@media(min-width:1400px)]:hidden flex"
							} h-[22px] w-[22px] ml-[1rem]  cursor-pointer text-gray-500`}
						/>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default DashboardTop;
