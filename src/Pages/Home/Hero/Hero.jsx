import { Swiper, SwiperSlide } from "swiper/react";
import { Cursor, Typewriter } from "react-simple-typewriter";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { categories } from "../../Product/PCategory";

const Hero = () => {
	return (
		<div className="py-20 bg-gradient-to-r from-gray-800 via-gray-900 to-black lg:px-0 px-6">
			{/* Header Section */}
			<div className="text-center mb-12 animate-fade-in">
				<h1 className="font-extrabold text-4xl md:text-6xl text-white tracking-tight">
					Making Branding{" "}
					<span className="text-orange-400 inline-block">
						<Typewriter
							words={["Product", "Design", "Solutions", "Strategy"]}
							loop={0}
							cursor
							cursorStyle=""
							typeSpeed={100}
							deleteSpeed={50}
							delaySpeed={2000}
						/>
					</span>
					<span className="text-[#018496]">
						<Cursor cursorStyle="|" />
					</span>
				</h1>
				<p className="text-lg md:text-2xl text-gray-300 mt-6 font-medium max-w-3xl mx-auto">
					Innovative packaging and trims designed for sustainability from
					concept to completion.
				</p>
			</div>

			{/* Subheading */}
			<h2 className="font-bold text-3xl md:text-4xl text-center text-white mb-10">
				Discover Your Perfect Products
			</h2>

			{/* Swiper Section */}
			<div className="xl:w-[1400px] mx-auto h-[350px] md:h-[350px] relative">
				<Swiper
					slidesPerView={1}
					spaceBetween={20}
					loop={true}
					pagination={{
						clickable: true,
						el: ".custom-pagination",
						renderBullet: (index, className) =>
							`<span class="${className} w-3 h-3 bg-white rounded-full mx-1 hover:bg-orange-400 transition-all"></span>`,
					}}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					}}
					breakpoints={{
						640: { slidesPerView: 2 },
						768: { slidesPerView: 3 },
						1024: { slidesPerView: 4 },
					}}
					modules={[Navigation, Pagination]}
					className="w-full h-full">
					{categories.map((category, index) => (
						<SwiperSlide key={index}>
							<Link to={`/product/${category.category}`}>
								<div className="relative h-full group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
									<img
										src={category.img}
										alt={category.title}
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
										<p className="text-white font-semibold text-lg md:text-xl p-4 w-full truncate">
											{category.title}
										</p>
									</div>
								</div>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>

				{/* Custom Pagination */}
				<div className="custom-pagination flex justify-center mt-6"></div>

				{/* Custom Navigation Buttons */}
				<div className="swiper-button-prev absolute top-1/2 left-4 z-10 -translate-y-1/2">
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</div>
				<div className="swiper-button-next absolute top-1/2 right-4 z-10 -translate-y-1/2">
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Hero;
