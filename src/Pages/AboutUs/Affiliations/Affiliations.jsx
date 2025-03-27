import DynamicBanner from "../../../Shared/DynamicBanner/DynamicBanner";
import PageTitle from "../../../utils/PageTitle";
import AffiliationsDetails from "./AffiliationsDetails/AffiliationsDetails";


function Affiliations ()
{
  return (
		<main>
			<PageTitle title={"Affiliations || AR Labels & Trims Ltd."} />
			{/*  banner section  */}
			<DynamicBanner
				tittle={"Affiliations"}
				webTittle={true}
				bg="https://www.arltl.com/web-cms-arltl/uploads/about-banner.jpg"
			/>
			{/* Affiliations section */}
			<AffiliationsDetails />
		</main>
	);
}

export default Affiliations;
