import  { lazy, Suspense } from "react";
import DynamicBanner from "../../../Shared/DynamicBanner/DynamicBanner";
import Spinner from "../../../components/Loader/Spinner";


// Lazy-load MissionVisionDetails
const MissionVisionDetails = lazy(() =>
  import("./MissionVisionDetails/MissionVisionDetails")
);

function MissionVision ()
{
  return (
    <main>
      {/* Banner Section */}
      <DynamicBanner webTittle bg="https://www.arltl.com/web-cms-arltl/uploads/about-banner.jpg" />

      {/* Mission & Vision Section */}
      <Suspense fallback={<Spinner/>}>
        <MissionVisionDetails />
      </Suspense>
    </main>
  );
}

export default MissionVision;
