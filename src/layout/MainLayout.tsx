import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <main className="flex min-h-screen w-full flex-row bg-muted/40">
      <div className="flex flex-1 flex-col gap-2 p-2 md:gap-4 md:p-4">
        <Outlet />
      </div>
    </main>
  );
};
