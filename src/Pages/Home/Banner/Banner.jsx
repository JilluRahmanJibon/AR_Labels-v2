import { Swiper, SwiperSlide } from "swiper/react";
import { Cursor, Typewriter } from "react-simple-typewriter";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
	const slides = [
		{
			category: "woven-label",
			title: "Woven label",
			img: "https://www.arltl.com/web-cms-arltl/uploads/Woven-Label-1++.jpg",
		},
		{
			category: "printed-fabric-labels",
			title: "Printed Fabric Labels",
			img: "https://www.arltl.com/web-cms-arltl/uploads/Printed-Fabric-Labels-01++.jpg",
		},
		{
			category: "screen-printed-labels",
			title: "Screen Printed Labels",
			img: "https://www.arltl.com/web-cms-arltl/uploads/Screen-Printed-Labels-1++.jpg",
		},
		{
			category: "heat-transfer-labels",
			title: "Heat Transfer Labels",
			img: "https://www.arltl.com/web-cms-arltl/uploads/Heat-Transfer-Labels-1++.jpg",
		},
		{
			category: "offset-printing-back-board",
			title: "OFFSET PRINTING & BACK BOARD",
			img: "https://www.arltl.com/web-cms-arltl/uploads/OFFSET-PRINTING-&-BACK-BOARD-1++.jpg",
		},
		{
			category: "paper-packaging",
			title: "Paper Packaging",
			img: "https://www.arltl.com/web-cms-arltl/uploads/Paper-Packaging-1++.jpg",
		},
		{
			category: "adhesive-labels-tags",
			title: "Adhesive Labels/Tags",
			img: "https://www.arltl.com/web-cms-arltl/uploads/Adhesive-Labels-Tags-1++.jpg",
		},
		{
			category: "barcode-labels-stickers",
			title: "Barcode Labels & Stickers",
			img: "https://www.arltl.com/web-cms-arltl/uploads/Barcode-Labels-&-Stickers-1++.jpg",
		},
		{
			category: "rubber-silicone-patch",
			title: "Rubber & Silicone Patch",
			img: "https://www.arltl.com/web-cms-arltl/uploads/Rubber-&-Silicone-Patch-1++.jpg",
		},
		{
			category: "jacron-pu-leather-patch-eco-friendly",
			title: "Jackron, PU & Leather Patch (Eco-Friendly)",
			img: "https://www.arltl.com/web-cms-arltl/uploads/Jacron,-PU-&-Leather-Patch-(Eco-Friendly)-1++.jpg",
		},
		{
			category: "seal-cord-plastic-clips-loops",
			title: "Seal Cord/Plastic Clips/Loops",
			img: "https://www.arltl.com/web-cms-arltl/uploads/Seal-Cord-Plastic-Clips-Loops-1++.jpg",
		},
		{
			category: "twill-tape-elastic",
			title: "Twill Tape & Elastic",
			img: "https://www.arltl.com/web-cms-arltl/uploads/Twill-Tape-&-Elastic-1++.jpg",
		},
		{
			category: "collar-stand-butterfly",
			title: "Collar Stand & Butterfly",
			img: "https://www.arltl.com/web-cms-arltl/uploads/Collar-Stand-&-Butterfly-1++.jpg",
		},
		{
			category: "poly-bags",
			title: "Poly Bags",
			img: "https://www.arltl.com/web-cms-arltl/uploads/Poly-Bags-1++.jpg",
		},
		{
			category: "pvc-tpu-eva-bags",
			title: "PVC / TPU / EVA Bags",
			img: "https://www.arltl.com/web-cms-arltl/uploads/Poly-Bags-1++.jpg",
		},
	];

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
			<div className="xl:w-[1400px] mx-auto h-[350px] md:h-[400px] relative">
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
					{slides.map((slide, index) => (
						<SwiperSlide key={index}>
							<Link to={`/${slide.category}`}>
								<div className="relative h-full group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
									<img
										src={slide.img}
										alt={slide.title}
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
										<p className="text-white font-semibold text-lg md:text-xl p-4 w-full truncate">
											{slide.title}
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

export default Banner;
