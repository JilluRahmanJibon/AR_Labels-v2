import { motion } from "framer-motion";
import CompanyImg from "../../../../Assets/AboutUs/vision_image_upload__1550049671_1550049671.jpg";

// Sample data
const ethicsValuesData = [
	"High quality.",
	"Best services.",
	"Honesty & Empathy.",
];

const principlesData = [
	"People are the backbone of our company.",
	"Honesty & integrity is the key for success.",
	"Customers are the partners of our organization.",
	"Teamwork is the foundation for success.",
	"Compassion is the fuel for growth.",
	"Quality is the base for long-term success.",
];

const qualityPolicyData = [
	"We will create an environment of integrity & high ethics.",
	"Established Objectives to help communicate organizational direction & drive improvements.",
	"Meet or Exceed Customer, Regulatory & Statutory Requirements.",
	"Continually improve our operations & performance by providing regular training to our people.",
];

const environmentalPolicyData = [
	"Compliance: Meet all applicable regulatory requirements.",
	"Resource Management: Minimize pollution and resource waste.",
	"Prevent Pollution: Minimize human health and safety risks.",
	"Continual Improvement: Seek ways to improve environmental performance.",
];

function EthicsValuesDetails() {
	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	const textVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
	};

	const underlineVariants = {
		hidden: { width: 0 },
		visible: { width: "100px", transition: { duration: 0.8, delay: 0.4 } },
	};

	return (
		<div className="bg-gradient-to-b from-gray-50 to-white font-[GeologicaFont]">
			<main className="xl:w-[1230px] w-[96%] mx-auto py-20 px-6 overflow-hidden">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center text-gray-800 mb-12">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
						Ethics & <span className="text-[#018496]">Values</span>
					</h1>
					<motion.div
						variants={underlineVariants}
						initial="hidden"
						animate="visible"
						className="h-1 bg-[#018496] rounded-full mx-auto mt-4"
					/>
				</motion.div>

				{/* Vision and Ethics Section */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className=" space-y-6 rounded-xl shadow-lg bg-white p-6">
					{/* Image */}
					<motion.div variants={itemVariants} className="relative">
						<img
							src={CompanyImg}
							alt="Company Vision"
							className="w-full h-[250px] object-cover rounded-lg shadow-md"
						/>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 0.2 }}
							className="absolute inset-0 bg-[#018496] rounded-lg"
						/>
					</motion.div>

					{/* Text Content */}
					<motion.div variants={textVariants} className="text-gray-700">
						{/* Ethics & Values */}
						<h4 className="text-xl font-semibold text-[#018496] mb-4">
							Ethics & Values
						</h4>
						<ul className="list-disc pl-5 mb-4 text-base md:text-lg leading-relaxed">
							{ethicsValuesData.map((item, index) => (
								<li key={index} className="mb-2">
									{item}
								</li>
							))}
						</ul>
						<p className="text-base md:text-lg leading-relaxed mb-6">
							We believe that these ethics and values, combined with our working
							principles, are essential to achieving Adzi’s Mission & Vision.
						</p>

						{/* Working Principles */}
						<h4 className="text-xl font-semibold text-[#018496] mb-4">
							Working Principles
						</h4>
						<ul className="list-disc pl-5 mb-6 text-base md:text-lg leading-relaxed">
							{principlesData.map((item, index) => (
								<li key={index} className="mb-2">
									{item}
								</li>
							))}
						</ul>

						{/* Quality Policy */}
						<h4 className="text-xl font-semibold text-[#018496] mb-4">
							Quality Policy
						</h4>
						<ul className="list-disc pl-5 mb-6 text-base md:text-lg leading-relaxed">
							{qualityPolicyData.map((item, index) => (
								<li key={index} className="mb-2">
									{item}
								</li>
							))}
						</ul>

						{/* Environmental Policy */}
						<h4 className="text-xl font-semibold text-[#018496] mb-4">
							Environmental Policy
						</h4>
						<ul className="list-disc pl-5 text-base md:text-lg leading-relaxed">
							{environmentalPolicyData.map((item, index) => (
								<li key={index} className="mb-2">
									{item}
								</li>
							))}
						</ul>
					</motion.div>
				</motion.div>
			</main>
		</div>
	);
}

export default EthicsValuesDetails;
