import { lazy, Suspense } from "react";
import DynamicBanner from "../../../Shared/DynamicBanner/DynamicBanner";
import Spinner from "../../../components/Loader/Spinner";
import PageTitle from "../../../utils/PageTitle";

// Lazy-load MissionVisionDetails
const MissionVisionDetails = lazy(() =>
	import("./MissionVisionDetails/MissionVisionDetails")
);

function MissionVision() {
	return (
		<main>
			<PageTitle title={"Mission & Vision || AR Labels & Trims Ltd."} />
			{/* Banner Section */}
			<DynamicBanner
				tittle={"Our Mission & Vision"}
				webTittle={false}
				bg="https://www.arltl.com/web-cms-arltl/uploads/about-banner.jpg"
			/>

			{/* Mission & Vision Section */}
			<Suspense fallback={<Spinner />}>
				<MissionVisionDetails />
			</Suspense>
		</main>
	);
}

export default MissionVision;
