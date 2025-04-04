import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router";
import { AppRouter } from "./router/AppRouter.jsx";
import { RouterProvider } from "react-router-dom";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Authprovider } from "./Context/Authprovider.jsx";


// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authprovider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={AppRouter}></RouterProvider>

      <Toaster></Toaster>
    </QueryClientProvider>
    </Authprovider>
  </StrictMode>
);
