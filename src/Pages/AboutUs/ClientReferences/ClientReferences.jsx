import DynamicBanner from "../../../Shared/DynamicBanner/DynamicBanner";
import PageTitle from "../../../utils/PageTitle";
import ClientReferencesDetails from "./ClientReferencesDetails/ClientReferencesDetails";


function ClientReferences ()
{
  return (
		<main>
			<PageTitle title={"Client References || AR Labels & Trims Ltd."} />
			{/*  banner section  */}
			<DynamicBanner
				tittle={"Client References"}
				webTittle={true}
				bg="https://www.arltl.com/web-cms-arltl/uploads/about-banner.jpg"
			/>
			{/* Client References section */}
			<ClientReferencesDetails />
		</main>
	);
}

export default ClientReferences;
