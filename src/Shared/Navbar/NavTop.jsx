import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaRegUserCircle, FaUserCheck } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const NavTop = ({user}) => {
  return (
		<div className=" bg-[#018496] ">
			<div
				className={`max-w-6xl mx-auto w-full h-[2.5rem] z-50 flex justify-center items-center`}>
				<div className="max-w-7xl w-full flex items-center justify-between mx-auto text-white sm:px-[25px] px-[10px]">
					<div className="flex items-center">
						<div className="[@media(min-width:450px)]:w-[24px] w-[21px] [@media(min-width:450px)]:h-[24px] h-[21px] cursor-pointer flex justify-center items-center border-[1.59px] border-white rounded-[50px] mx-[5px]">
							<a
								href="https://www.adzitrims.com/"
								target="_blank"
								rel="noopener noreferrer">
								<FaFacebookF className="text-[11px]" />
							</a>
						</div>
						<div className="[@media(min-width:450px)]:w-[24px] w-[21px] [@media(min-width:450px)]:h-[24px] h-[21px] cursor-pointer flex justify-center items-center border-[1.59px] border-white rounded-[50px] mx-[5px]">
							<FaLinkedinIn className="text-[11px]" />
						</div>
						<div className="[@media(min-width:450px)]:w-[24px] w-[21px] [@media(min-width:450px)]:h-[24px] h-[21px] cursor-pointer flex justify-center items-center border-[1.59px] border-white rounded-[50px] mx-[5px]">
							<BsInstagram className="text-[11px]" />
						</div>
					</div>

					{user ? (
						<Link
							to={`${user?.role}/dashboard`}
							className="flex justify-center items-center mx-[5px] cursor-pointer">
							<FaUserCheck className="[@media(min-width:450px)]:text-[20px] text-[17px]" />
							<p className="pl-[5px] pt-[1px] [@media(min-width:450px)]:text-[12.5px] text-[12px]">
								Profile
							</p>
						</Link>
					) : (
						<Link
							to={"/login"}
							className="flex justify-center items-center mx-[5px] cursor-pointer">
							<FaRegUserCircle className="[@media(min-width:450px)]:text-[20px] text-[17px]" />
							<p className="pl-[5px] pt-[1px] [@media(min-width:450px)]:text-[12.5px] text-[12px]">
								Existing customers
							</p>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}

export default NavTop
