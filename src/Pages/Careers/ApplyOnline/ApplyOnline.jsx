import DynamicBanner from "../../../Shared/DynamicBanner/DynamicBanner";
import ApplyOnlineDetails from "./ApplyOnlineDetails/ApplyOnlineDetails";

const ApplyOnline = () => {
	return (
		<div>
			{/*  banner section  */}
			<DynamicBanner
				webTittle={true}
				bg={"https://arltl.com/web-cms-arltl/uploads/career-bg.jpg"}
			/>

			{/*  Apply Online section  */}
			<ApplyOnlineDetails />
		</div>
	);
};

export default ApplyOnline;
