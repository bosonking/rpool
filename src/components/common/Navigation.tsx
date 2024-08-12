import { GitHubLogo } from "@/components/ui/github-logo";
import { RefreshCcw } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

type Props = {
  address?: string;
  worker?: string;
  sessionId?: string;
  onClickRefresh: () => void;
};

export const Navigation = ({
  address,
  worker,
  sessionId,
  onClickRefresh,
}: Props) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <Breadcrumb className="px-2">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Pool</BreadcrumbLink>
          </BreadcrumbItem>
          {address && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/${address}`}>{address}</BreadcrumbLink>
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
      <div className="flex flex-row justify-end items-center gap-4">
        <a href="https://github.com/bosonking/rpool-ui" target="_blank">
          <GitHubLogo className="h-6 w-6 fill-muted-foreground hover:fill-zinc-300 cursor-pointer" />
        </a>
        <RefreshCcw
          className="h-6 w-6 text-muted-foreground hover:text-zinc-300 cursor-pointer"
          onClick={onClickRefresh}
        />
      </div>
    </div>
  );
};
