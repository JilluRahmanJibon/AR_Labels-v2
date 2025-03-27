import { Suspense, lazy } from "react";
import DynamicBanner from "../../../Shared/DynamicBanner/DynamicBanner";
import Spinner from "../../../components/Loader/Spinner";
import PageTitle from "../../../utils/PageTitle";

// Lazy load components
const OurCompanyDetails = lazy(() => import("./OurCompanyDetails"));

function OurCompany() {
	return (
		<main>
			<PageTitle title={'Our Company || AR Labels & Trims Ltd.'}/>
			{/*  banner section  */}
			<DynamicBanner
				tittle="Our Company"
				webTittle={false}
				bg="https://www.arltl.com/web-cms-arltl/uploads/about-banner.jpg"
			/>
			{/*  skils and company details sections */}
			<Suspense fallback={<Spinner />}>
				<OurCompanyDetails />
			</Suspense>
		</main>
	);
}

export default OurCompany;
