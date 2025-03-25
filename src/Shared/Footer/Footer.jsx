import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = memo(() => {
	const currentYear = new Date().getFullYear();
	const links = [
		{ path: "", label: "Terms & Conditions" },
		{ path: "", label: "Privacy Policy" },
	];

	// Animation variants
	const footerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	const linkVariants = {
		hover: { scale: 1.05, color: "#018496" },
	};

	return (
		<motion.footer
			variants={footerVariants}
			initial="hidden"
			whileInView="visible"
			transition={{ duration: 0.6 }}
			viewport={{ once: false }}
			className="bg-[#1E2121] py-8 md:py-12">
			<div className="max-w-[1240px] mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
				{/* Legal Information */}
				<motion.p
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: false }}
					className="text-[#ffffffe5] text-sm md:text-base text-center md:text-left">
					<span className="font-bold text-[#018496]">AR </span>
					<span className="font-medium">
						Labels & Trims Ltd. - Copyright © {currentYear} All Rights Reserved.
					</span>
				</motion.p>

				{/* Links */}
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: false }}
					className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-10">
					{links.map((link, index) => (
						<motion.div
							key={index}
							variants={linkVariants}
							whileHover="hover"
							transition={{ duration: 0.3 }}>
							<Link
								to={link.path}
								className="text-white text-sm md:text-base font-medium hover:text-[#018496] transition-colors duration-300">
								{link.label}
							</Link>
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* Decorative Element */}
			<motion.div
				initial={{ width: 0 }}
				whileInView={{ width: "100%" }}
				transition={{ duration: 1, delay: 0.6 }}
				className="h-[2px] bg-gradient-to-r from-transparent via-[#018496] to-transparent mt-6"
			/>
		</motion.footer>
	);
});

Footer.displayName = "FooterComponent";

export default Footer;
