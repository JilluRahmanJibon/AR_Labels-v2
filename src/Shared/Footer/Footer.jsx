import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import {
	FaPhoneFlip,
	FaInstagram,
	FaLinkedinIn,
	FaFacebookF,
	FaYoutube,
} from "react-icons/fa6";
import logo from "../../Assets/logo.png"; // Assuming you have a logo

const Footer = memo(() => {
	const currentYear = new Date().getFullYear();

	const legalLinks = [
		{ path: "/terms", label: "Terms & Conditions" },
		{ path: "/privacy", label: "Privacy Policy" },
	];

	const socialLinks = [
		{ Icon: FaInstagram, href: "https://instagram.com" },
		{ Icon: FaLinkedinIn, href: "https://linkedin.com" },
		{ Icon: FaFacebookF, href: "https://facebook.com" },
		{ Icon: FaYoutube, href: "https://youtube.com" },
	];

	// Animation variants
	const footerVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.3 } },
	};

	const sectionVariants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: "easeOut" },
		},
	};

	const linkVariants = {
		hover: { scale: 1.1, color: "#c9EB61", transition: { duration: 0.3 } },
	};

	const iconVariants = {
		hover: {
			scale: 1.3,
			rotate: [0, 10, -10, 0],
			color: "#c9EB61",
			transition: { duration: 0.4 },
		},
	};

	const glowVariants = {
		animate: {
			boxShadow: [
				"0 0 10px rgba(1, 132, 150, 0.5)",
				"0 0 20px rgba(201, 235, 97, 0.7)",
				"0 0 10px rgba(1, 132, 150, 0.5)",
			],
			transition: { duration: 3, repeat: Infinity },
		},
	};

	return (
		<motion.footer
			variants={footerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: false }}
			className="w-full bg-gradient-to-b from-[#1E2121] to-[#141616] text-white font-[GeologicaFont] relative overflow-hidden">
			{/* Glowing Gradient Background */}
			<div className="absolute inset-0 -z-10">
				<motion.div
					initial={{ opacity: 0, scale: 0.7 }}
					whileInView={{ opacity: 0.25, scale: 1.2 }}
					transition={{ duration: 1.5 }}
					className="absolute top-1/3 left-1/4 w-[32rem] h-[32rem] bg-gradient-to-br from-[#018496] to-[#c9EB61] rounded-full blur-3xl animate-pulse-slow"
				/>
				<motion.div
					initial={{ opacity: 0, scale: 0.7 }}
					whileInView={{ opacity: 0.25, scale: 1.2 }}
					transition={{ duration: 1.5, delay: 0.3 }}
					className="absolute bottom-1/3 right-1/4 w-[32rem] h-[32rem] bg-[#c9EB61] rounded-full blur-3xl animate-pulse-slow"
				/>
			</div>

			{/* Main Content: 3 Columns */}
			<div className="max-w-[1240px] mx-auto px-6 md:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
				{/* Head Office */}
				<motion.div
					variants={sectionVariants}
					className="text-center md:text-left">
					<h3 className="text-2xl font-extrabold text-[#c9EB61] mb-6 drop-shadow-[0_0_10px_rgba(201,235,97,0.7)]">
						Head Office
					</h3>
					<div className="space-y-6 text-[#ffffffe6] text-base md:text-lg">
						<p className="leading-relaxed text-[#ffffffb3]">
							Tropical Alauddin Tower, Flat #14/A, House#32/C, Road#02, Sector
							#3, Uttara-1230, Dhaka, Bangladesh.
						</p>
						<ul className="space-y-4">
							<li className="flex items-center justify-center md:justify-start">
								<MdEmail className="text-[#018496] w-7 h-7 mr-3 drop-shadow-[0_0_6px_rgba(1,132,150,0.5)]" />
								<span>info@arltl.com</span>
							</li>
							<li className="flex items-center justify-center md:justify-start">
								<FaPhoneFlip className="text-[#018496] w-7 h-7 mr-3 drop-shadow-[0_0_6px_rgba(1,132,150,0.5)]" />
								<span>+880 1971 069 500</span>
							</li>
						</ul>
					</div>
				</motion.div>

				{/* Factory */}
				<motion.div
					variants={sectionVariants}
					className="text-center md:text-left">
					<h3 className="text-2xl font-extrabold text-[#c9EB61] mb-6 drop-shadow-[0_0_10px_rgba(201,235,97,0.7)]">
						Factory
					</h3>
					<div className="space-y-6 text-[#ffffffe6] text-base md:text-lg">
						<p className="leading-relaxed text-[#ffffffb3]">
							Dag No: 3809, Vill+Mouza: Nalvugh, Nishadnagar, Turag, Dhaka,
							Bangladesh.
						</p>
					</div>
				</motion.div>

				{/* Social Icons */}
				<motion.div
					variants={sectionVariants}
					className="text-center md:text-right">
					<h3 className="text-2xl font-extrabold text-[#c9EB61] mb-6 drop-shadow-[0_0_10px_rgba(201,235,97,0.7)]">
						Connect With Us
					</h3>
					<div className="flex justify-center md:justify-end gap-8">
						{socialLinks.map((social, index) => (
							<motion.a
								key={index}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								variants={iconVariants}
								whileHover="hover"
								className="text-[#018496] transition-colors">
								<social.Icon className="w-9 h-9 drop-shadow-[0_0_8px_rgba(1,132,150,0.6)]" />
							</motion.a>
						))}
					</div>
				</motion.div>
			</div>

			{/* Bottom Section */}
			<motion.div
				variants={glowVariants}
				animate="animate"
				className="w-full bg-[#141616]/90 py-8 border-t border-[#018496]/50 backdrop-blur-sm">
				<div className="max-w-[1240px] mx-auto px-6 md:px-8 flex flex-col items-center gap-6">
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-[#ffffffe6] text-base md:text-lg font-semibold text-center">
						<span className="text-[#018496]"> AR Labels</span> & Trims Ltd. -
						Copyright © {currentYear} All Rights Reserved.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
						{legalLinks.map((link, index) => (
							<motion.div
								key={index}
								variants={linkVariants}
								whileHover="hover"
								transition={{ duration: 0.3 }}>
								<Link
									to={link.path}
									className="text-[#ffffffe6] text-sm md:text-base font-medium transition-colors">
									{link.label}
								</Link>
							</motion.div>
						))}
					</motion.div>
				</div>
			</motion.div>

			{/* Glowing Divider */}
			<motion.div
				initial={{ opacity: 0, scaleX: 0 }}
				whileInView={{ opacity: 1, scaleX: 1 }}
				transition={{ duration: 1.5, ease: "easeOut" }}
				className="w-full h-2 bg-gradient-to-r from-transparent via-[#c9EB61] to-transparent shadow-[0_0_25px_rgba(201,235,97,0.9)]"
			/>
		</motion.footer>
	);
});

Footer.displayName = "FooterComponent";

export default Footer;
