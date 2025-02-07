import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import "aos/dist/aos.css";
import AOS from "aos";
import router from "./Routes/Routes";

AOS.init({ duration: 600, once: true });
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router}>
				<Toaster />
			</RouterProvider>
		</QueryClientProvider>
	</StrictMode>
);
