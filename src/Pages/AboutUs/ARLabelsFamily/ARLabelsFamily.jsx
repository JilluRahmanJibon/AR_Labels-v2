import React, { Suspense } from "react";
import Spinner from "../../../components/Loader/Spinner";

const DynamicBanner = React.lazy(() =>
	import("../../../Shared/DynamicBanner/DynamicBanner")
);
const FamilyMember = React.lazy(() => import("./FamilyMember/FamilyMember"));

function ARLabelsFamily() {
	return (
		<main>
			{/* Banner Section */}
			<Suspense fallback={<Spinner />}>
				<DynamicBanner
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
