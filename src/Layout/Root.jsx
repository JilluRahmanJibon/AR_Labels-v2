import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "../components/Loader/Spinner";
import GoToTop from "../utils/GoToTop";
import verifyToken from "../utils/verifyToken";

const Navbar = React.lazy(() => import("../Shared/Navbar/Navbar"));
const Footer = React.lazy(() => import("../Shared/Footer/Footer"));

const Root = () => {
	const token = localStorage.getItem("authToken");
	let user;
	if (token) {
		user = verifyToken(token);
	}

	return (
		<main>
			<Suspense fallback={<Spinner />}>
				<section>
					<Navbar user={user} />
				</section>
			</Suspense>

			<section>
				<Outlet />
			</section>

			<Suspense fallback={<Spinner />}>
				<section>
					<GoToTop />
					<Footer />
				</section>
			</Suspense>
		</main>
	);
};

export default Root;
