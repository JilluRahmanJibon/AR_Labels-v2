import React, { Suspense } from "react";
import Spinner from "../../../components/Loader/Spinner";
import PageTitle from "../../../utils/PageTitle";

const DynamicBanner = React.lazy(() =>
	import("../../../Shared/DynamicBanner/DynamicBanner")
);
const FamilyMember = React.lazy(() => import("./FamilyMember/FamilyMember"));

function ARLabelsFamily() {
	return (
		<main>
			<PageTitle title={"Family || AR Labels & Trims Ltd."} />
			{/* Banner Section */}
			<Suspense fallback={<Spinner />}>
				<DynamicBanner
					tittle={"Family"}
					webTittle={true}
					bg="https://www.arltl.com/web-cms-arltl/uploads/about-banner.jpg"
				/>
			</Suspense>

			{/* Family Section */}
			<Suspense fallback={<div>Loading family members...</div>}>
				<FamilyMember />
			</Suspense>
		</main>
	);
}

export default ARLabelsFamily;
