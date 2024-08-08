import { Navigation } from "@/components/Navigation";
import { ThemeProvider } from "@/contexts/theme";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="rpool-ui_theme">
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <Navigation />
        </header>
        <main className="flex flex-1 flex-col gap-2 p-4 md:gap-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
};
