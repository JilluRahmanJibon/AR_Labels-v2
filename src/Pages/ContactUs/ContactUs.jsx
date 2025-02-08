import DynamicBanner from "../../Shared/DynamicBanner/DynamicBanner";
import ContactMap from "./ContactMap/ContactMap";
import OurNewsLetter from "../Home/OurNewsLetter/OurNewsLetter";
import ContactInfo from "./ContactInfo/ContactInfo";

const ContactUs = () => {
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
