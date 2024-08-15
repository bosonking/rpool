import { GitHubLogo } from "@/components/ui/github-logo";
import { RefreshCcw } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { ThemeToggle } from "../ThemeToggle";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type Props = {
  address?: string;
  worker?: string;
  sessionId?: string;
  onClickRefresh: () => void;
  loading?: boolean;
};

export const Navigation = ({
  address,
  worker,
  sessionId,
  onClickRefresh,
  loading,
}: Props) => {
  return (
    <div className="w-full flex flex-row justify-between items-center px-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Pool</BreadcrumbLink>
          </BreadcrumbItem>
          {address && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={`/${address}`}
                  className="hidden md:block"
                >
                  {address}
                </BreadcrumbLink>
                <BreadcrumbLink
                  className={cn("block md:hidden truncate w-40", {
                    "w-12": worker || sessionId,
                  })}
                  href={`/${address}`}
                  title={address}
                >
                  {address}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          )}
          {worker && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>{worker}</BreadcrumbItem>
            </>
          )}
          {sessionId && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>{sessionId}</BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-row justify-end items-center gap-2">
        <ThemeToggle />
        <Button asChild variant="outline" size="icon">
          <a href="https://github.com/bosonking/rpool-ui" target="_blank">
            <GitHubLogo className="h-button-icon w-button-icon fill-foreground cursor-pointer" />
          </a>
        </Button>
        <Button asChild variant="outline" size="icon">
          <div>
            <RefreshCcw
              className={cn("h-button-icon w-button-icon cursor-pointer", {
                "animate-spin-ccw": loading,
              })}
              onClick={onClickRefresh}
            />
          </div>
        </Button>
      </div>
    </div>
  );
};
