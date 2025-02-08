import { memo } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoDotFill } from "react-icons/go";

const NextButton = memo(({ onClick }) => {
	return (
		<div
			className="bg-[#dcdcdc]  w-[30px] h-[80px] absolute top-[40%] right-0 hidden sm:flex items-center  cursor-pointer z-10 text-black hover:text-[#018496] transition duration-300"
			onClick={onClick}>
			<MdKeyboardArrowRight className="text-[27px]" />
		</div>
	);
});

NextButton.displayName = "NextButton"; // ✅ Fix for ESLint warning

// Prev Button Component
const PrevButton = memo(({ onClick }) => {
	return (
		<div
			className="bg-[#dcdcdc] w-[30px] h-[80px]  absolute top-[40%] left-0 hidden sm:flex items-center  cursor-pointer z-10 text-black hover:text-[#018496] transition duration-300"
			onClick={onClick}>
			<MdKeyboardArrowLeft className="text-[27px]" />
		</div>
	);
});

PrevButton.displayName = "PrevButton"; // ✅ Fix for ESLint warning

// Optimized main Banner component
const Banner = () => {
	const bannerData = [
		{
			id: 1,
			image: "https://arltl.com/web-cms-arltl/uploads/banner-1.jpg",
		},

		{
			id: 2,
			image: "https://arltl.com/web-cms-arltl/uploads/banner-2.jpg",
		},
		{
			id: 3,
			image: "https://arltl.com/web-cms-arltl/uploads/banner-3.jpg",
		},
		{
			id: 4,
			image: "https://arltl.com/web-cms-arltl/uploads/banner-4.jpg",
		},
	];

	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		pauseOnHover: false,
		appendDots: dots => (
			<div style={{ bottom: "0px" }}>
				<ul className="m-0" id="bannerDotId">
					{dots}
				</ul>
			</div>
		),
		customPaging: index => (
			<div className="bannerDotliId text-gray-400 w-[12px]  bottom-0">
				<GoDotFill className="cursor-pointer   sm:text-[17px] text-[12px]" />
			</div>
		),
		nextArrow: <NextButton />,
		prevArrow: <PrevButton />,
	};

	return (
		<div className="max-w-[1920px] mx-auto     ">
			<Slider {...settings} className="w-full     ">
				{bannerData.map(({ id, image }) => (
					<img
						key={id}
						src={image}
						className=" xl:h-[500px] "
						alt={`Banner ${id}`}
					/>
				))}
			</Slider>
		</div>
	);
};

export default Banner;
