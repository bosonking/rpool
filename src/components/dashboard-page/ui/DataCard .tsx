import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon, IconName } from "@/components/ui/icon";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type Props = {
  icon: IconName;
  loading?: boolean;
  title: string;
  highlight?: boolean;
};

export const DataCard: React.FC<PropsWithChildren<Props>> = ({
  children,
  icon,
  loading,
  title,
  highlight = false,
}) => {
  if (loading) {
    return (
      <Skeleton className="w-full h-full flex justify-center items-center text-zinc-300">
        Loading...
      </Skeleton>
    );
  }
  return (
    <Card className="min-h-[inherit]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle
          className={cn("font-medium", {
            "text-2xl": highlight,
            "text-sm": !highlight,
          })}
        >
          {title}
        </CardTitle>
        <Icon
          name={icon}
          className={cn("text-muted-foreground", {
            "h-8 w-8": highlight,
            "h4- w-4": !highlight,
          })}
        />
      </CardHeader>
      <CardContent className="flex flex-col justify-center max-h-96 pb-0">
        {children}
      </CardContent>
    </Card>
  );
};
