import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AdminLayout from "../Layout/AdminLayout";
import ErrorPage from "../components/Errorpage/Errorpage";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import { lazy, Suspense } from "react";
import BSection from "../Pages/Admin/Banner/BSection";

// Lazy Load Components for Better Performance
const OurCompany = lazy(() => import("../Pages/AboutUs/OurCompany/OurCompany"));
const MissionVision = lazy(() =>
	import("../Pages/AboutUs/MissionVision/MissionVision")
);
const ARLabelsFamily = lazy(() =>
	import("../Pages/AboutUs/ARLabelsFamily/ARLabelsFamily")
);
const EthicsValues = lazy(() =>
	import("../Pages/AboutUs/EthicsValues/EthicsValues")
);
const Affiliations = lazy(() =>
	import("../Pages/AboutUs/Affiliations/Affiliations")
);
const ClientReferences = lazy(() =>
	import("../Pages/AboutUs/ClientReferences/ClientReferences")
);
const Product = lazy(() => import("../Pages/Product/Product"));
const ProductDetails = lazy(() => import("../Pages/Product/ProductDetails"));
const NewsEvents = lazy(() => import("../Pages/NewsEvents/NewsEvents"));
const AvailablePositions = lazy(() =>
	import("../Pages/Careers/AvailablePositions/AvailablePositions")
);
const ApplyOnline = lazy(() =>
	import("../Pages/Careers/ApplyOnline/ApplyOnline")
);
const Login = lazy(() => import("../Pages/Login/Login"));
const SignUp = lazy(() => import("../Pages/SignUp/SignUp"));
const Certifications = lazy(() =>
	import("../Pages/Sustainability/Certifications")
);
const Dashboard = lazy(() => import("../Pages/Dashboard/Dashboard"));
const AllProducts = lazy(() => import("../Pages/Admin/Products/AllProducts"));
const AddProduct = lazy(() => import("../Pages/Admin/Products/AddProduct"));
const UpdateProduct = lazy(() =>
	import("../Pages/Admin/Products/UpdateProduct")
);

const withSuspense = Component => (
	<Suspense
		fallback={
			<div className="flex items-center justify-center min-h-screen">
				<div className="w-12 h-12 border-4 border-t-transparent border-primary rounded-full animate-spin"></div>
			</div>
		}>
		{Component}
	</Suspense>
);

const validCategories = [
	"woven-label",
	"printed-fabric-labels",
	"screen-printed-labels",
	"heat-transfer-labels",
	"offset-printing-back-board",
	"paper-packaging",
	"adhesive-labels-tags",
	"barcode-labels-stickers",
	"rubber-silicone-patch",
	"jacron-pu-leather-patch-eco-friendly",
	"seal-cord-plastic-clips-loops",
	"twill-tape-elastic",
	"collar-stand-butterfly",
	"poly-bags",
	"pvc-tpu-eva-bags",
];

const productDetailsLoader = ({ params }) => {
	if (!validCategories.includes(params.pCategory.toLowerCase())) {
		throw new Response("Category Not Found", { status: 404 });
	}
	return null;
};
const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/contact-us", element: <ContactUs /> },
			// About Us
			{ path: "/about/our-company", element: withSuspense(<OurCompany />) },
			{
				path: "/about/mission-vision",
				element: withSuspense(<MissionVision />),
			},
			{
				path: "/about/ar-labels-family",
				element: withSuspense(<ARLabelsFamily />),
			},
			{ path: "/about/ethics-values", element: withSuspense(<EthicsValues />) },
			{ path: "/about/affiliations", element: withSuspense(<Affiliations />) },
			{
				path: "/about/client-references",
				element: withSuspense(<ClientReferences />),
			},
			// Products
			{ path: "/products/:pid", element: withSuspense(<Product />) },
			{
				path: "/:pCategory",
				element: withSuspense(<ProductDetails />),
				loader: productDetailsLoader, // Validates pCategory
			},
			// News Events
			{ path: "/news-events", element: withSuspense(<NewsEvents />) },
			// Careers
			{
				path: "/careers/available-positions",
				element: withSuspense(<AvailablePositions />),
			},
			{ path: "/careers/apply-online", element: withSuspense(<ApplyOnline />) },
			// Login & Sign Up
			{ path: "/login", element: withSuspense(<Login />) },
			{ path: "/sign-up", element: withSuspense(<SignUp />) },
			// Certifications
			{ path: "/certifications", element: withSuspense(<Certifications />) },
			// Catch-All for Root Children
			{ path: "*", element: <ErrorPage /> }, // Moved inside root children
		],
	},
	{
		path: "/superAdmin",
		element: <AdminLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "dashboard", element: withSuspense(<Dashboard />) }, // Relative path
			{ path: "banner", element: withSuspense(<BSection />) },
			{
				path: "product-solutions/all-products",
				element: withSuspense(<AllProducts />),
			},
			{
				path: "product-solutions/update/:pid",
				element: withSuspense(<UpdateProduct />),
			},
			{
				path: "product-solutions/add-product",
				element: withSuspense(<AddProduct />),
			},
			// Catch-All for Admin Children
			{ path: "*", element: <ErrorPage /> }, // Catches invalid admin subpaths
		],
	},
	// Optional: Top-level catch-all (can be removed since nested catch-alls handle it)
	// { path: "*", element: <ErrorPage /> },
]);

export default router;
