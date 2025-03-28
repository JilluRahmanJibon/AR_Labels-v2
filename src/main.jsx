import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import router from "./Routes/Routes";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			{/* Toaster should be outside of RouterProvider */}
			<Toaster position="top-right" richColors />

			<RouterProvider router={router} />
		</QueryClientProvider>
	</StrictMode>
);
