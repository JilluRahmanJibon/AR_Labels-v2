import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Using react-icons for arrows

const Testimonial = () => {
	const settings = {
		dots: false, // Removed dots
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
	};

	const TestimonialClint = [
		{
			id: 1,
			name: "Christopher",
			description:
				"It really met my requirements. You guys were very patient even though there were delays from my side. The price was competitive and all our requirements were met. I’d definitely recommend you!",
			position: "United States",
			image:
				"https://badshaagency.netlify.app/static/media/img5.e56ccb9063f496db12da.jpg",
		},
		{
			id: 2,
			name: "Anthony",
			description:
				"Prompt, courteous, and skilled beyond what’s advertised. A great seller I continue to work with!",
			position: "South Korea",
			image:
				"https://badshaagency.netlify.app/static/media/img5.e56ccb9063f496db12da.jpg",
		},
		{
			id: 3,
			name: "Richard",
			description:
				"Very pleased with the quality of leads delivered on time. Professional and responsive—will use again!",
			position: "United States",
			image:
				"https://badshaagency.netlify.app/static/media/img5.e56ccb9063f496db12da.jpg",
		},
		{
			id: 4,
			name: "Barbara",
			description:
				"Exceeded expectations on my order. Went above and beyond—highly recommend for future projects!",
			position: "Canada",
			image:
				"https://badshaagency.netlify.app/static/media/img5.e56ccb9063f496db12da.jpg",
		},
		{
			id: 5,
			name: "Kenneth",
			description:
				"A skilled and courteous seller with excellent communication. A pleasure to work with repeatedly!",
			position: "United Kingdom",
			image:
				"https://badshaagency.netlify.app/static/media/img5.e56ccb9063f496db12da.jpg",
		},
	];

	// Animation variants
	const cardVariants = {
		hidden: { opacity: 0, y: 30, scale: 0.95 },
		visible: { opacity: 1, y: 0, scale: 1 },
		hover: { scale: 1.05, boxShadow: "0px 15px 30px rgba(1, 132, 150, 0.3)" },
	};

	return (
		<section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
			<div className="max-w-[1240px] mx-auto px-6 md:px-8">
				{/* Animated Title Section */}
				<motion.p
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: false }}
					className="text-[#018496] text-sm md:text-base font-medium text-center mb-2">
					Testimonial
				</motion.p>
				<motion.h1
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: false }}
					className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 tracking-tight drop-shadow-md">
					What People Say About Us
					<span className="block h-1 w-24 bg-[#018496] rounded-full mx-auto mt-3"></span>
				</motion.h1>

				{/* Slider Section */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: false }}
					className="relative">
					<Slider {...settings} className="w-full">
						{TestimonialClint.map(client => (
							<motion.div
								key={client.id}
								variants={cardVariants}
								initial="hidden"
								whileInView="visible"
								whileHover="hover"
								transition={{ duration: 0.5 }}
								viewport={{ once: false }}
								className="px-4 py-6">
								<div className="bg-white rounded-xl shadow-lg p-6 md:p-8 h-full flex flex-col justify-between border border-gray-200 hover:border-[#018496]/50 relative overflow-hidden">
									{/* Gradient Overlay on Hover */}
									<div className="absolute inset-0 bg-gradient-to-t from-[#018496]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 z-0"></div>

									{/* Quote Icon */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										className="w-6 h-6 md:w-8 md:h-8 text-[#018496] mb-4 z-10"
										viewBox="0 0 975.036 975.036">
										<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
									</svg>

									{/* Testimonial Text */}
									<p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 h-[120px] md:h-[100px] z-10">
										{client.description}
									</p>

									{/* Client Info */}
									<div className="flex items-center z-10">
										<img
											alt={client.name}
											src={client.image}
											className="w-12 h-12 md:w-14 md:h-14 rounded-full flex-shrink-0 object-cover object-center shadow-md"
										/>
										<span className="flex-grow flex flex-col pl-4">
											<span className="text-gray-800 font-semibold text-base md:text-lg">
												{client.name}
											</span>
											<span className="text-gray-500 text-xs md:text-sm font-light">
												{client.position}
											</span>
										</span>
									</div>

									{/* Decorative Element */}
									<motion.div
										className="absolute bottom-0 left-0 w-0 h-2 bg-[#018496] rounded-r-full"
										whileInView={{ width: 80 }}
										transition={{ duration: 0.8 }}
									/>
								</div>
							</motion.div>
						))}
					</Slider>

					{/* Custom Next/Prev Buttons at Bottom */}
					<div className="flex justify-center gap-6 mt-8">
						<motion.button
							className="p-3 bg-[#018496] text-white rounded-full shadow-md hover:bg-[#016f80] transition-all duration-300"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => document.querySelector(".slick-prev").click()}>
							<FaArrowLeft className="text-xl" />
						</motion.button>
						<motion.button
							className="p-3 bg-[#018496] text-white rounded-full shadow-md hover:bg-[#016f80] transition-all duration-300"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => document.querySelector(".slick-next").click()}>
							<FaArrowRight className="text-xl" />
						</motion.button>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

// Custom Arrows (Visible and Styled)
function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={`${className} hidden`}
			style={{ ...style }}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={`${className} hidden`}
			style={{ ...style }}
			onClick={onClick}
		/>
	);
}

export default Testimonial;
