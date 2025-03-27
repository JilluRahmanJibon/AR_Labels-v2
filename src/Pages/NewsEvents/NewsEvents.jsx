import DynamicBanner from "../../Shared/DynamicBanner/DynamicBanner";
import PageTitle from "../../utils/PageTitle";
import NewsEventsDetails from "./NewsEventsDetails/NewsEventsDetails";

function NewsEvents ()
{
  return (
		<main>
			<PageTitle title={"News & Events || AR Labels & Trims LTD."} />
			{/* Dynamic Banner Section */}
			<DynamicBanner
				webTittle={true}
				bg={"https://arltl.com/web-cms-arltl/uploads/news-bg.jpg"}
			/>

			{/* News & Events Section */}
			<section className="w-full bg-white">
				<NewsEventsDetails />
			</section>
		</main>
	);
}

export default NewsEvents;
