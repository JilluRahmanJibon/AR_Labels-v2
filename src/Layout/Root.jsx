import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Components/Loader/Spinner";
import { BaseURL } from "../utils/BaseURL";

const Navbar = React.lazy(() => import("../Shared/Navbar/Navbar"));
const Footer = React.lazy(() => import("../Shared/Footer/Footer"));

const fetchCategories = async () => {
	const response = await fetch(`${BaseURL}/categories`);
	if (!response.ok) throw new Error("Failed to fetch categories");
	return response.json();
};

const Root = () => {
	const { data, error, isLoading } = useQuery({
		queryKey: ["/categories"],
		queryFn: fetchCategories,
	});

	// Render spinner while data is loading
	// if (isLoading) return <Spinner />;

	// Render error message if fetching data fails
	// if (error) return <div>Error loading data: {error.message}</div>;

	return (
		<main>
			<Suspense fallback={<Spinner />}>
				<section>
					<Navbar data={data || []} />
				</section>
			</Suspense>

			<section>
				<Outlet />
			</section>

			<Suspense fallback={<Spinner />}>
				<section>
					<Footer />
				</section>
			</Suspense>
		</main>
	);
};

export default Root;
