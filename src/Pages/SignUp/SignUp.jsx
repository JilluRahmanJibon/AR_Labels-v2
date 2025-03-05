import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignUp() {
	const [clickEye, setClickEye] = useState(true);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		number: "",
		password: "",
	});

	// Handle input change
	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// Handle form submission
	const handleSubmit = async e => {
		e.preventDefault();
		console.log("User Data:", formData); // Debugging, remove this in production

		// Send data to backend
		try {
			const response = await fetch("http://localhost:5000/api/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const result = await response.json();
			console.log("Server Response:", result); // Handle response as needed
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<main className="w-full h-[80vh] flex flex-col justify-center items-center">
			<div className="container mx-auto flex flex-col justify-center items-center">
				<div className="sm:w-[400px] w-full min-h-[400px] rounded-lg shadow-md p-10">
					<h2 className="text-black text-2xl text-center pb-5">Sign Up</h2>
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<label className="relative block">
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									placeholder="First Name"
									className="border-2 border-[#018496] text-black text-sm rounded-lg w-full p-2.5 outline-none"
								/>
							</label>
						</div>

						<div className="mb-3">
							<label className="relative block">
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									placeholder="Email Address"
									className="border-2 border-[#018496] text-black text-sm rounded-lg w-full p-2.5 outline-none"
								/>
							</label>
						</div>
						<div className="mb-3">
							<label className="relative block">
								<input
									type="text"
									name="number"
									value={formData.number}
									onChange={handleChange}
									required
									placeholder="Phone Number"
									className="border-2 border-[#018496] text-black text-sm rounded-lg w-full p-2.5 outline-none"
								/>
							</label>
						</div>
						<div className="mb-3 relative">
							<label className="block">
								<input
									type={clickEye ? "password" : "text"}
									name="password"
									value={formData.password}
									onChange={handleChange}
									required
									placeholder="Password"
									className="border-2 border-[#018496] text-black text-sm rounded-lg w-full p-2.5 outline-none"
								/>
								{clickEye ? (
									<FaEyeSlash
										onClick={() => setClickEye(false)}
										className="absolute right-3 top-3 cursor-pointer text-gray-600"
									/>
								) : (
									<FaEye
										onClick={() => setClickEye(true)}
										className="absolute right-3 top-3 cursor-pointer text-gray-600"
									/>
								)}
							</label>
						</div>

						<button
							type="submit"
							className="w-full py-2 rounded-full bg-teal-600 text-white hover:bg-transparent border-2 border-teal-600 hover:text-teal-600 transition">
							Sign Up
						</button>
						<p className="mt-3 text-black text-sm">
							Already have an account?
							<Link to="/login" className="text-teal-600 pl-1">
								Log In
							</Link>
						</p>
					</form>
				</div>
			</div>
		</main>
	);
}
