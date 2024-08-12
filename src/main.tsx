import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/theme/theme-provider.tsx";
import "./index.css";
import { MainLayoutNoNav } from "./layout/MainLayoutNoNav.tsx";
import { DashboardPage } from "./pages/DashboardPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoutNoNav />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="rpool-ui_theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
