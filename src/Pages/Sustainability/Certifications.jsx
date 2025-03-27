import DynamicBanner from "../../Shared/DynamicBanner/DynamicBanner";
import CertificationsDetails from "./CertificationsDetails/CertificationsDetails";

const Certifications = () => {
	return (
		<div>
			{/* Banner Section */}
			<DynamicBanner
				webTittle={true}
				bg="https://arltl.com/web-cms-arltl/uploads/SUSTAINABLE.jpg"
			/>

			{/* Certifications Section */}
			<CertificationsDetails />
		</div>
	);
};

export default Certifications;
