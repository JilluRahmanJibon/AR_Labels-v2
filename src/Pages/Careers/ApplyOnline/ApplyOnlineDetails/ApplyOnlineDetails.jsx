import { useState } from "react";

const ApplyOnlineDetails = () => {
	const AvailablePositionsData = [
		// { id: 1, description: "President" },
		// { id: 2, description: "Vice President" },
		// { id: 3, description: "Software Engineer" },
		// { id: 4, description: "UI/UX Designer" },
	];

	const [selectedPosition, setSelectedPosition] = useState("");
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		address: "",
		position: "",
		cvaplication: "",
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log("Form Data Submitted:", formData);
	};

	return (
		<div className="bg-[#fff] GeologicaFont">
			<main className="xl:w-[1230px] w-[96%] mx-auto py-[3rem] px-5 overflow-hidden">
				<div className="w-full text-center text-black">
					<h1 className="text-[30px] font-semibold">Apply Online</h1>
					<div className="flex items-center mt-2 justify-center">
						<div className="w-[21px] h-[3px] bg-[#FA0472]"></div>
						<div className="w-[22px] h-[6px] mx-[5px] bg-[#018496]"></div>
						<div className="w-[21px] h-[3px] bg-[#FA0472]"></div>
					</div>
				</div>

				<div className="lg:w-1/2 w-[100%] mx-auto text-center">
					<form onSubmit={handleSubmit}>
						<div className="mb-[12px] pt-[1.5rem] text-left">
							<label className="relative">
								<input
									type="text"
									name="fullName"
									value={formData.fullName}
									onChange={handleChange}
									required
									className="border-[2px] border-[#018496] text-black text-sm rounded-lg focus:ring-[#018496] focus:border-[#018496] block w-full p-2.5 outline-none"
									placeholder="Your Full Name"
								/>
							</label>
						</div>

						{/* Email & Phone on the same row */}
						<div className="grid gap-3 mb-[12px] md:grid-cols-2 text-left">
							<label className="relative">
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="border-[2px] border-[#018496] text-black text-sm rounded-lg focus:ring-[#018496] focus:border-[#018496] block w-full p-2.5 outline-none"
									placeholder="Email Address"
								/>
							</label>

							<label className="relative">
								<input
									type="tel"
									name="phone"
									value={formData.phone}
									onChange={handleChange}
									required
									className="border-[2px] border-[#018496] text-black text-sm rounded-lg focus:ring-[#018496] focus:border-[#018496] block w-full p-2.5 outline-none"
									placeholder="Your Phone"
								/>
							</label>
						</div>

						<div className="mb-[12px] text-left">
							<label className="relative">
								<textarea
									name="address"
									value={formData.address}
									onChange={handleChange}
									required
									rows="2"
									className="border-[2px] border-[#018496] text-black text-sm rounded-lg focus:ring-[#018496] focus:border-[#018496] block w-full p-2.5 outline-none"
									placeholder="Applicant's Address"
								/>
							</label>
						</div>

						{/* Dynamic Position Selection */}
						<div className="mb-[12px] text-left">
							<label className="relative">
								<div className="relative">
									<select
										className="border-[2px] border-[#018496] text-black text-sm rounded-lg block w-full p-2.5 outline-none"
										value={selectedPosition || ""}
										onChange={e => {
											setSelectedPosition(e.target.value);
											setFormData({
												...formData,
												position: e.target.value,
											});
										}}
										required>
										<option value="" disabled>
											{AvailablePositionsData.length === 0
												? "No Position Available"
												: "Select a Position"}
										</option>
										{AvailablePositionsData.map(pos => (
											<option key={pos.id} value={pos.description}>
												{pos.description}
											</option>
										))}
									</select>
								</div>
							</label>
						</div>

						<div className="mb-[12px] text-left">
							<label className="relative">
								<input
									type="file"
									name="cvaplication"
									onChange={handleChange}
									required
									className="border-[2px] border-[#018496] text-black text-sm rounded-lg focus:ring-[#018496] focus:border-[#018496] block w-full p-2.5 outline-none"
								/>
							</label>
						</div>

						<div className="text-center">
							<button
								type="submit"
								className="bg-[#018496] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#016d71] transition">
								Submit Application
							</button>
						</div>
					</form>
				</div>
			</main>
		</div>
	);
};

export default ApplyOnlineDetails;
