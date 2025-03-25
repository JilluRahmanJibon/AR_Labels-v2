import { Suspense, lazy } from "react";
import DynamicBanner from "../../../Shared/DynamicBanner/DynamicBanner";
import Spinner from "../../../components/Loader/Spinner";

// Lazy load components
const AboutSkils = lazy(() => import("./AboutSkils/AboutSkils"));
const OurCompanyDetails = lazy(() =>
	import("./OurCompanyDetails/OurCompanyDetails")
);

function OurCompany() {
	return (
		<main>
			{/*  banner section  */}
			<DynamicBanner
				webTittle={true}
				bg="https://www.arltl.com/web-cms-arltl/uploads/about-banner.jpg"
			/>
			{/*  skils and company details sections */}
			<Suspense fallback={<Spinner />}>
				<AboutSkils />
				<OurCompanyDetails />
			</Suspense>
		</main>
	);
}

export default OurCompany;
