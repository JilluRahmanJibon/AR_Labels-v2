import DynamicBanner from "../../Shared/DynamicBanner/DynamicBanner";
import ContactMap from "./ContactMap/ContactMap";
import ContactInfo from "./ContactInfo/ContactInfo";
import PageTitle from "../../utils/PageTitle";

const ContactUs = () =>
{
	<PageTitle title={"Contact Us|| AR Labels & Trims LTD."} />;
	return (
		<div>
			{/*  banner section  */}
			<DynamicBanner
				webTittle={false}
				tittle={"Contact Us"}
				bg={"https://arltl.com/web-cms-arltl/uploads/contact-bg.jpg"}
			/>

			{/*  Contact Information section  */}
			<ContactInfo />

			{/*  Map section  */}
			<ContactMap />
		</div>
	);
};

export default ContactUs;
