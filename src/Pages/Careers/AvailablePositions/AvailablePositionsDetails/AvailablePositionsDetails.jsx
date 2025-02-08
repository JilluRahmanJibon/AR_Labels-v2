const AvailablePositionsDetails = () => {
	const data = [];

	return (
		<div className="bg-[#fff] pb-10 GeologicaFont">
			<main className="xl:w-[1240px] w-full mx-auto py-[3rem] px-5 overflow-hidden">
				<div className="w-full text-center text-black relative z-10 sm:pb-[25px] pb-[15px]">
					<h1 className="text-[19px] sm:text-[25px] md:text-[27px] lg:text-[30px] font-semibold">
						Available Job Positions
					</h1>
					<div className="flex items-center mt-[5px] justify-center">
						<div className="w-[18px] h-[2px] sm:w-[21px] sm:h-[3px] bg-[#FA0472] inline-flex"></div>
						<div className="w-[19px] h-[5px] sm:w-[22px] sm:h-[6px] mx-[5px] bg-[#018496] inline-flex"></div>
						<div className="w-[18px] h-[2px] sm:w-[21px] sm:h-[3px] bg-[#FA0472] inline-flex"></div>
					</div>
				</div>

				{/* Display Available Positions Table */}
				<div className="overflow-x-auto shadow-[0px_0px_6px_0px_#c6c6c6]">
					<table className="min-w-full">
						<thead>
							<tr className="bg-[#018496] text-white">
								<th className="py-[15px] text-left px-[20px]">SL</th>
								<th className="py-[15px] text-left px-[20px]">Job Title</th>
								<th className="py-[15px] text-left px-[20px]">
									No. Of Positions
								</th>
								<th className="py-[15px] text-left px-[20px]">Deadline</th>
							</tr>
						</thead>
						<tbody>
							{data?.length > 0 && (
								<>
									{data.map((position, index) => (
										<tr
											key={position.id}
											className={`${index % 2 === 0 ? "bg-[#f9f9f9]" : ""}`}>
											<td className="py-[15px] text-left px-[20px]">
												{position.id}
											</td>
											<td className="py-[15px] text-left px-[20px]">
												{position.position}
											</td>
											<td className="py-[15px] text-left px-[20px]">
												{position.avaPosition}
											</td>
											<td className="py-[15px] text-left px-[20px]">
												{position.deadline}
											</td>
										</tr>
									))}
								</>
							)}
						</tbody>
					</table>

					{data?.length <= 0 && (
						<p className=" p-10 text-center">
							Sorry! There are no available job positions right now. Please keep
							in touch.
						</p>
					)}
				</div>
			</main>
		</div>
	);
};

export default AvailablePositionsDetails;
