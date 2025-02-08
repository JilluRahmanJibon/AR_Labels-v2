const teamMembers = [
	{
		id: 1,
		image:
			"https://badshaagency.netlify.app/static/media/img2.4f1804bf6c4583322af8.jpg",
		name: "Sikder Sakiuzzaman",
		title: "(Chairman)",
		description:
			"Chairman, Adzi Trims Ltd. Experienced in Apparel Accessories Business.",
	},
	{
		id: 2,
		image:
			"https://badshaagency.netlify.app/static/media/img2.4f1804bf6c4583322af8.jpg",
		name: "Golam Mortuza Khan",
		title: "(Managing Director)",
		description:
			"Managing Director, Adzi Trims Ltd. Renowned in the field of accessories industry.",
	},
	{
		id: 3,
		image:
			"https://badshaagency.netlify.app/static/media/img2.4f1804bf6c4583322af8.jpg",
		name: "Al Shahriar Ahmed",
		title: "(Director)",
		description:
			"Director, Adzi Trims Ltd. Renowned in the field of accessories industry.",
	},
];

function FamilyMember() {
	const cardClass =
		"w-[300px] h-[290px] mx-2 my-2 rounded-lg bg-white shadow-md flex flex-col items-center transition-transform duration-300 hover:scale-105";
	const imgClass = "w-[105px] h-[105px] rounded-full overflow-hidden";
	const textClass = "text-center mt-4 px-4";
	const nameClass = "text-[18px] font-medium";
	const titleClass = "text-red-600 text-[13px]";
	const descriptionClass = "text-[13px] text-gray-600";

	return (
		<main className="w-full h-full pt-16 pb-10 GeologicaFont bg-white">
			<div className="xl:w-[1230px] w-[96%] mx-auto">
				{/* Section Header */}
				<div className="text-center text-black pb-6">
					<h1 className="text-[22px] sm:text-[25px] md:text-[27px] lg:text-[30px] font-semibold">
						Our Family
					</h1>
					<p className="text-[#018496] text-[14px] sm:text-[15px]">
						A Well-Seasoned Team At The Helm
					</p>
				</div>

				{/* Team Members */}
				<div className="flex flex-wrap justify-center">
					{teamMembers.map(member => (
						<div key={member.id} className={cardClass}>
							<div className={imgClass}>
								<img
									src={member.image}
									alt={member.name}
									className="w-full h-full object-cover"
								/>
							</div>
							<div className={textClass}>
								<h3 className={nameClass}>{member.name}</h3>
								<p className={titleClass}>{member.title}</p>
								<p className={descriptionClass}>{member.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}

export default FamilyMember;
