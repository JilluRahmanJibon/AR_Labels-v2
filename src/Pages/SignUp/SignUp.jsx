import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "sonner"; // Added for feedback (optional)
import PageTitle from "../../utils/PageTitle";
import { BaseURL } from "../../utils/BaseURL"; // Assuming you have this for consistency with Login

export default function SignUp() {
	const [clickEye, setClickEye] = useState(true);
	const [isLoading, setIsLoading] = useState(false); // Added for loading state
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
		const toastId = toast.loading("Signing up..."); // Optional: Toast feedback
		setIsLoading(true);

		try {
			const response = await fetch(`${BaseURL}/api/signup`, {
				// Updated to use BaseURL
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			const result = await response.json();

			if (response.ok) {
				toast.success("Account created successfully! Please log in.", {
					id: toastId,
					duration: 2000,
				});
				setFormData({ name: "", email: "", number: "", password: "" });
			} else {
				toast.error(result?.message || "Sign up failed", {
					id: toastId,
					duration: 2000,
				});
			}
		} catch (error) {
			console.error("Error:", error);
			toast.error("Something went wrong", { id: toastId, duration: 2000 });
		} finally {
			setIsLoading(false);
		}
	};

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	const buttonVariants = {
		hover: { scale: 1.05, backgroundColor: "#fff", color: "#018496" },
		tap: { scale: 0.95 },
	};

	return (
		<main className="w-full min-h-screen flex items-center justify-center relative font-[GeologicaFont] bg-gradient-to-br from-[#e6f4f5] to-[#f0f9fa] overflow-hidden">
			<PageTitle title="Sign Up - AR Labels & Trims Ltd." />

			{/* Decorative Background Elements */}
			<div className="absolute inset-0 -z-10">
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 0.1, scale: 1 }}
					transition={{ duration: 1 }}
					className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#018496] rounded-full blur-3xl"
				/>
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 0.1, scale: 1 }}
					transition={{ duration: 1, delay: 0.2 }}
					className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#c9EB61] rounded-full blur-3xl"
				/>
			</div>

			{/* SignUp Card */}
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="relative w-full max-w-md mx-4 bg-white rounded-2xl shadow-xl p-8 z-10">
				{/* Header */}
				<motion.div variants={itemVariants} className="text-center mb-8">
					<h2 className="text-3xl font-extrabold text-gray-800">
						Create Your <span className="text-[#018496]">Account</span>
					</h2>
					<p className="text-sm text-gray-600 mt-2">Join AR Labels & Trims</p>
				</motion.div>

				{/* Form */}
				<form onSubmit={handleSubmit} className="space-y-6">
					{/* Name Field */}
					<motion.div variants={itemVariants} className="relative">
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
							className="peer w-full px-4 py-3 text-gray-800 bg-transparent border-2 border-gray-300 rounded-lg focus:border-[#018496] focus:ring-2 focus:ring-[#018496]/20 outline-none transition-all duration-300"
							placeholder=" "
						/>
						<label
							htmlFor="name"
							className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm bg-white px-1 transition-all duration-300 peer-focus:-top-0 peer-focus:text-[#018496] peer-focus:text-xs peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base">
							Full Name
						</label>
					</motion.div>

					{/* Email Field */}
					<motion.div variants={itemVariants} className="relative">
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							className="peer w-full px-4 py-3 text-gray-800 bg-transparent border-2 border-gray-300 rounded-lg focus:border-[#018496] focus:ring-2 focus:ring-[#018496]/20 outline-none transition-all duration-300"
							placeholder=" "
						/>
						<label
							htmlFor="email"
							className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm bg-white px-1 transition-all duration-300 peer-focus:-top-0 peer-focus:text-[#018496] peer-focus:text-xs peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base">
							Email Address
						</label>
					</motion.div>

					{/* Phone Number Field */}
					<motion.div variants={itemVariants} className="relative">
						<input
							type="text"
							name="number"
							value={formData.number}
							onChange={handleChange}
							required
							className="peer w-full px-4 py-3 text-gray-800 bg-transparent border-2 border-gray-300 rounded-lg focus:border-[#018496] focus:ring-2 focus:ring-[#018496]/20 outline-none transition-all duration-300"
							placeholder=" "
						/>
						<label
							htmlFor="number"
							className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm bg-white px-1 transition-all duration-300 peer-focus:-top-0 peer-focus:text-[#018496] peer-focus:text-xs peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base">
							Phone Number
						</label>
					</motion.div>

					{/* Password Field */}
					<motion.div variants={itemVariants} className="relative">
						<input
							type={clickEye ? "password" : "text"}
							name="password"
							value={formData.password}
							onChange={handleChange}
							required
							className="peer w-full px-4 py-3 text-gray-800 bg-transparent border-2 border-gray-300 rounded-lg focus:border-[#018496] focus:ring-2 focus:ring-[#018496]/20 outline-none transition-all duration-300"
							placeholder=" "
						/>
						<label
							htmlFor="password"
							className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm bg-white px-1 transition-all duration-300 peer-focus:-top-0 peer-focus:text-[#018496] peer-focus:text-xs peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base">
							Password
						</label>
						<motion.div
							whileHover={{ scale: 1.1 }}
							className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer"
							onClick={() => setClickEye(!clickEye)}>
							{clickEye ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
						</motion.div>
					</motion.div>

					{/* Submit Button */}
					<motion.button
						type="submit"
						variants={buttonVariants}
						whileHover="hover"
						whileTap="tap"
						disabled={isLoading}
						className="w-full py-3 px-6 bg-[#018496] text-white font-semibold rounded-full border-2 border-[#018496] flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50">
						{isLoading ? (
							<>
								<div className="w-5 h-5 border-4 border-t-transparent border-white rounded-full animate-spin" />
								Signing up...
							</>
						) : (
							"Sign Up"
						)}
					</motion.button>
				</form>

				{/* Link */}
				<motion.div
					variants={itemVariants}
					className="mt-6 text-center text-sm text-gray-600">
					<p>
						Already have an account?{" "}
						<Link to="/login" className="text-[#018496] hover:underline">
							Log In
						</Link>
					</p>
				</motion.div>

				{/* Subtle Border Animation */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="absolute inset-0 border-2 border-[#018496] rounded-2xl pointer-events-none"
					transition={{ duration: 1, delay: 0.5 }}
				/>
			</motion.div>
		</main>
	);
}
