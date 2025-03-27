import Hero from "./Hero/Hero";
import LandAbout from "./LandAbout/LandAbout";
import Branding from "./Branding/Branding";
import Experience from "./Experience/Experience";
import OurService from "./OurService/OurService";
import Manufacturing from "./Manufacturing/Manufacturing";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Portfolio from "./Portfolio/Portfolio";
import Testimonials from "./Testimonials/Testimonials";
import FAQs from "./FAQs/FAQs";
import NewsLetter from "./NewsLetter/NewsLetter";
import PageTitle from "../../utils/PageTitle";

const Home = () => {
	return (
		<main>
			<PageTitle
				title={"AR Labels: Garment Branding Specialist & Clothing Bespoke."}
			/>

			{/*  banner section  */}
			<Hero />
			{/* <Banner /> */}
			{/* experience section  */}
			<Experience />
			{/* About Us section  */}
			<LandAbout />
			{/* service section  */}
			<OurService />
			{/* Manufacturing  */}
			<Manufacturing />
			{/* WhyChooseUs */}
			<WhyChooseUs />
			{/* Portfolio  */}
			<Portfolio />
			{/* Testimonials  */}
			<Testimonials />
			{/* FAQs  */}
			<FAQs />
			{/* Branding section  */}
			<Branding />
			{/* Our News Letter section  */}
			<NewsLetter />

			{/* footer section for landing page on the bottom */}
			{/* <LandFooter /> */}
		</main>
	);
};

// Add display name for better debugging
Home.displayName = "HomePage";

export default Home;
