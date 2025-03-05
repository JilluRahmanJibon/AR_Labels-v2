import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Components/Loader/Spinner";
import { BaseURL } from "../utils/BaseURL";
import GoToTop from "../utils/GoToTop";
import verifyToken from "../utils/verifyToken";

const Navbar = React.lazy(() => import("../Shared/Navbar/Navbar"));
const Footer = React.lazy(() => import("../Shared/Footer/Footer"));

const fetchCategories = async () => {
	const response = await fetch(`${BaseURL}/categories`);
	if (!response.ok) throw new Error("Failed to fetch categories");
	return response.json();
};

const Root = () => {
	const token = localStorage.getItem("authToken");
	const { data, isLoading } = useQuery({
		queryKey: ["/categories"],
		queryFn: fetchCategories,
		staleTime: 1000 * 60 * 5,
		refetchOnWindowFocus: false,
	});

	let user;
	if (token) {
		user = verifyToken(token);
	}

	// Render spinner while data is loading
	// if (isLoading) return <Spinner />;

	return (
		<main>
			<Suspense fallback={<Spinner />}>
				<section>
					<Navbar data={data?.data || []} user={user} />
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
