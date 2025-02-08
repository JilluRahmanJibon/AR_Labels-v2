function DynamicBanner({ bg, webTittle, tittle }) {
	const titleClasses =
		"font-[500] text-[1.5rem] GeologicaFont drop-shadow-[0_0_1px_#000000ff]";
	const headingClasses =
		"xl:!text-[4rem] lg:!text-[3.5rem] md:!text-[3rem] sm:!text-[2.5rem] [@media(min-width:400px)]:text-[2rem]";

	return (
		<main
			className="w-full   lg:h-[80vh] md:h-[70vh] sm:h-[60vh] h-[30vh] flex items-center justify-center AboutPageImage"
			style={{ backgroundImage: `url(${bg})` }}>
			<div className="w-full h-full bg-[#2c3e504f] flex items-center justify-center text-white z-10">
				{/* Conditionally render the first title */}
				{webTittle && (
					<h1
						data-aos="zoom-in"
						className={`${titleClasses} ${headingClasses}`}>
						AR-Labels & <span className="text-[#c9eb61]">Trims Ltd.</span>
					</h1>
				)}

				{/* Conditionally render the second title */}
				{!webTittle && (
					<h1
						data-aos="zoom-in"
						className={`${titleClasses} ${headingClasses} text-[#c9eb61]`}>
						{tittle}
					</h1>
				)}
			</div>
		</main>
	);
}

export default DynamicBanner;
