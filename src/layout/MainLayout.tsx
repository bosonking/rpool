import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <main className="min-h-screen w-full flex flex-col gap-1 md:gap-2 p-2 md:p-4">
      <Outlet />
    </main>
  );
};
