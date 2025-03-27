import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "sonner";
import verifyToken from "../../utils/verifyToken";
import { BaseURL } from "../../utils/BaseURL";
import PageTitle from "../../utils/PageTitle";

export default function Login() {
	const navigate = useNavigate();

	const [clickEye, setClickEye] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prevData => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async e => {
		e.preventDefault();
		const toastId = toast.loading("Logging in...");
		setIsLoading(true);

		try {
			const response = await fetch(`${BaseURL}/auth/login`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			const result = await response.json();

			if (response.ok) {
				const user = verifyToken(result.data.accessToken);
				localStorage.setItem("authToken", result.data.accessToken);
				toast.success(`${user.role} logged in successfully`, {
					id: toastId,
					duration: 2000,
				});
				navigate(`/${user.role}/dashboard`);
			} else {
				setIsLoading(false);
				toast.error(result?.message || "Login failed", {
					id: toastId,
					duration: 2000,
				});
			}
		} catch (error) {
			console.log("🚀 ~ Login ~ error:", error);
			setIsLoading(false);
			toast.error("Something went wrong", { id: toastId, duration: 2000 });
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
			<PageTitle title="Sign In - AR Labels & Trims Ltd." />

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

			{/* Login Card */}
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="relative w-full max-w-md mx-4 bg-white rounded-2xl shadow-xl p-8 z-10">
				{/* Header */}
				<motion.div variants={itemVariants} className="text-center mb-8">
					<h1 className="text-3xl font-extrabold text-gray-800">
						Welcome <span className="text-[#018496]">Back</span>
					</h1>
					<p className="text-sm text-gray-600 mt-2">Sign in to your account</p>
				</motion.div>

				{/* Form */}
				<form onSubmit={handleSubmit} className="space-y-6">
					{/* Email Field */}
					<motion.div variants={itemVariants} className="relative">
						<input
							type="email"
							id="email"
							name="email"
							autoComplete="off"
							required
							value={formData.email}
							onChange={handleChange}
							className="peer w-full px-4 py-3 text-gray-800 bg-transparent border-2 border-gray-300 rounded-lg focus:border-[#018496] focus:ring-2 focus:ring-[#018496]/20 outline-none transition-all duration-300"
							placeholder=" "
						/>
						<label
							htmlFor="email"
							className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm bg-white px-1 transition-all duration-300 peer-focus:-top-0 peer-focus:text-[#018496] peer-focus:text-xs peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base">
							Email Address
						</label>
					</motion.div>

					{/* Password Field */}
					<motion.div variants={itemVariants} className="relative">
						<input
							type={clickEye ? "password" : "text"}
							id="password"
							name="password"
							autoComplete="off"
							required
							value={formData.password}
							onChange={handleChange}
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
								Logging in...
							</>
						) : (
							"Log In"
						)}
					</motion.button>
				</form>

				{/* Links */}
				<motion.div
					variants={itemVariants}
					className="mt-6 text-center text-sm text-gray-600">
					<p>
						Forgot Password?{" "}
						<a href="#" className="text-[#018496] hover:underline">
							Click Here
						</a>
					</p>
					<p className="mt-2">
						Don’t have an account?{" "}
						<Link to="/sign-up" className="text-[#018496] hover:underline">
							Sign Up
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
