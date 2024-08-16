import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SWRConfig } from "swr";
import { Toaster } from "./components/ui/toaster.tsx";
import { ThemeProvider } from "./contexts/theme/theme-provider.tsx";
import { REFRESH_INTERVAL } from "./domain/constants.ts";
import "./index.css";
import { MainLayout } from "./layout/MainLayout.tsx";
import { AddressPage } from "./pages/AddressPage.tsx";
import { DashboardPage } from "./pages/DashboardPage.tsx";
import { WorkerPage } from "./pages/WorkerPage.tsx";
import { fetcher } from "./domain/fetcher.ts";

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
    <SWRConfig
      value={{
        refreshInterval: REFRESH_INTERVAL,
        revalidateOnFocus: false,
        fetcher,
      }}
    >
      <ThemeProvider defaultTheme="dark" storageKey="rpool-ui_theme">
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </SWRConfig>
  </React.StrictMode>
);
