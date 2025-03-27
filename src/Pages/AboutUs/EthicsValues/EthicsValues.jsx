import DynamicBanner from "../../../Shared/DynamicBanner/DynamicBanner";
import PageTitle from "../../../utils/PageTitle";
import EthicsValuesDetails from "./EthicsValuesDetails/EthicsValuesDetails";


function EthicsValues ()
{
  return (
		<main>
			<PageTitle title={"Ethics & Values || AR Labels & Trims Ltd."} />
			{/* Dynamic banner */}
			<DynamicBanner
				tittle={"Ethics & Values"}
				webTittle={false}
				bg="https://www.arltl.com/web-cms-arltl/uploads/about-banner.jpg"
			/>

			{/* Ethics and values section */}
			<EthicsValuesDetails />
		</main>
	);
}

export default EthicsValues;
