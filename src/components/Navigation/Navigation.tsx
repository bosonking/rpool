import { Menu } from "lucide-react";
import { Logo } from "../Logo";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { NavigationItem, NavigationItemProps } from "./NavigationItem";

const navigationItems: NavigationItemProps[] = [
  { key: "dashboard", label: "Dashboard", href: "/" },
];

// TODO: Add router

export const Navigation = () => {
  return (
    <>
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <div className="flex items-center gap-2 text-lg font-semibold md:text-base">
          <a
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Logo />
          </a>
          {navigationItems.map((entry) => (
            <NavigationItem {...entry} />
          ))}
        </div>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            {navigationItems.map((entry) => (
              <NavigationItem {...entry} />
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};
