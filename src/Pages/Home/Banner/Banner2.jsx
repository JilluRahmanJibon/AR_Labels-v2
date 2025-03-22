import { Swiper, SwiperSlide } from "swiper/react";
import { Cursor, Typewriter } from "react-simple-typewriter";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Banner2 = () => {
	const slides = [
		{
			img: "https://s.uiinitiative.com/items/cards-stack-slider/screenshots/1.jpg",
			text: "Slide 1",
			link: "/slide1",
		},
		{
			img: "https://s.uiinitiative.com/items/cards-stack-slider/screenshots/1.jpg",
			text: "Slide 2",
			link: "/slide2",
		},
		{
			img: "https://s.uiinitiative.com/items/cards-stack-slider/screenshots/1.jpg",
			text: "Slide 3",
			link: "/slide3",
		},
		{
			img: "https://s.uiinitiative.com/items/cards-stack-slider/screenshots/1.jpg",
			text: "Slide 4",
			link: "/slide4",
		},
		{
			img: "https://s.uiinitiative.com/items/cards-stack-slider/screenshots/1.jpg",
			text: "Slide 5",
			link: "/slide5",
		},
	];

	return (
		<div className="pb-20 pt-20   bg-gray-200 lg:px-0 px-10">
			<div className="text-center  ">
				<h1 className="font-bold text-5xl text-center">
					Making branding{" "}
					<span className="text-[#FFAC2A] [@media(min-width:640px)]:pl-[10px] pl-[5px]">
						<Typewriter
							words={["product", "design", "solutions", "strategy"]}
							loop={5}
							cursor
							cursorStyle=""
							typeSpeed={300}
							deleteSpeed={50}
							delaySpeed={5000}
						/>
					</span>
					<span className="text-green-500">
						<Cursor cursorStyle="|" />
					</span>
				</h1>
				<p className="text-2xl py-10 font-semibold">
					Our innovative packaging and trims ensure sustainability from design
					to delivery
				</p>
			</div>
			<h1 className="font-bold text-3xl pb-5 text-center ">
				Discover the right products for you
			</h1>
			<div className="lg:w-[1024px] mx-auto lg:h-[50vh] h-[35vh] flex flex-col justify-center bg-blue-100 relative">
				{/* Swiper Container */}
				<Swiper
					slidesPerView={4}
					spaceBetween={10}
					loop={true}
					pagination={{
						clickable: true,
						el: ".custom-pagination",
						type: "bullets",
					}}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					}}
					breakpoints={{
						640: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 3,
						},
						1024: {
							slidesPerView: 4,
						},
					}}
					modules={[Navigation, Pagination]}
					className="w-full h-full">
					{/* Slides */}
					{slides.map((slide, index) => (
						<SwiperSlide key={index}>
							<Link to={slide.link}>
								<div className="relative h-full">
									<img
										src={slide.img}
										alt={slide.text}
										className="w-full h-full object-cover"
									/>
									<p className="absolute bottom-0 underline bg-red-500 py-2 pl-3 w-full  rounded-tr-full   text-white font-bold text-2xl z-10">
										{slide.text}
									</p>
								</div>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>

				{/* Custom Underline Pagination */}
				<div className="custom-pagination flex justify-center mt-4 items-center">
					{slides.map((_, index) => (
						<div
							key={index}
							className="cursor-pointer"
							style={{
								transition: "all 0.3s ease-in-out",
								margin: 0,
								padding: 0,
							}}></div>
					))}
				</div>

				{/* Custom Navigation buttons */}
				<div className="swiper-button-next absolute top-1/2 right-20 z-10">
					{/* Next button */}
				</div>
				<div className="swiper-button-prev absolute top-1/2 left-52 z-10">
					{/* Prev button */}
				</div>
			</div>
		</div>
	);
};

export default Banner2;
