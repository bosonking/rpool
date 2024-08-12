import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "./components/ui/toaster.tsx";
import { ThemeProvider } from "./contexts/theme/theme-provider.tsx";
import "./index.css";
import { MainLayout } from "./layout/MainLayout.tsx";
import { AddressPage } from "./pages/AddressPage.tsx";
import { DashboardPage } from "./pages/DashboardPage.tsx";
import { WorkerPage } from "./pages/WorkerPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: ":address",

        children: [
          {
            index: true,
            element: <AddressPage />,
          },
          {
            path: ":worker/:sessionId",
            element: <WorkerPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="rpool-ui_theme">
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  </React.StrictMode>
);
