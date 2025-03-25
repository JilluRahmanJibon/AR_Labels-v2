import React, { Suspense, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/Loader/Spinner";
import { BaseURL } from "../utils/BaseURL";
import DashboardTop from "../Pages/Dashboard/DashboardTop";
import ASideNav from "../Pages/Admin/AdminNav/ASideNav";

// Lazy load `AdminDashboardNav` and `ProtectedRoute`
const AdminDashboardNav = React.lazy(() =>
	import("../Pages/Admin/AdminNav/AdminNav")
);
const ProtectedRoute = React.lazy(() => import("./ProtectedRoute"));

const fetchUserDetails = async token => {
	const response = await fetch(`${BaseURL}/users/me`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: token,
		},
	});

	if (!response.ok) throw new Error("Unauthorized");
	return response.json();
};

const AdminLayout = () => {
	const [showSideNav, setSideNav] = useState(true);
	const navigate = useNavigate();
	const token = localStorage.getItem("authToken");

	// Fetch user details only if the token exists
	const { isLoading, data, error } = useQuery({
		queryKey: ["/users/me"],
		queryFn: () => fetchUserDetails(token),
		enabled: !!token, // Only run if token is available
	});

	// Handle unauthorized responses or errors
	useEffect(() => {
		if (!isLoading && error) {
			navigate("/login");
		}
	}, [isLoading, error, navigate]);

	// Show a loader while fetching
	if (isLoading) return <Spinner />;

	return (
		<main className="flex flex-col h-screen w-screen overflow-hidden">
			<Suspense fallback={<Spinner />}>
				<ProtectedRoute requiredRole={data?.data?.role}>
					{/* Top Navbar */}
					<header className="w-full h-16 bg-white shadow-md fixed top-0 z-50">
						<DashboardTop showSideNav={showSideNav} setSideNav={setSideNav} />
					</header>

					{/* Sidebar + Main Content */}
					<div className="flex h-full  ">
						{/* Sidebar */}
						<aside
							className={`bg-white shadow-md h-full transition-all duration-300 ${
								showSideNav ? "w-[15rem]" : "w-1"
							}`}>
							<Suspense fallback={<Spinner />}>
								<ASideNav data={data?.data} showSideNav={showSideNav} />
							</Suspense>
						</aside>

						{/* Main Content */}
						<section className="flex-1 overflow-auto p-2 pt-[3.8rem] ">
							<Outlet />
						</section>
					</div>
				</ProtectedRoute>
			</Suspense>
		</main>
	);
};

export default AdminLayout;
