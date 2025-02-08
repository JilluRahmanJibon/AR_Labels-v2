import DynamicBanner from "../../Shared/DynamicBanner/DynamicBanner";
import CertificationsData from "./CertificationsData/CertificationsData";

const Certifications = () => {
	return (
		<div>
			{/* Banner Section */}
			<DynamicBanner
				webTittle={true}
				bg="https://arltl.com/web-cms-arltl/uploads/SUSTAINABLE.jpg"
			/>

			{/* Certifications Section */}
			<CertificationsData />
		</div>
	);
};

export default Certifications;
