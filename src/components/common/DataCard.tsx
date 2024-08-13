import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon, IconName } from "@/components/ui/icon";
import { withLoading, WithLoadingProps } from "@/hocs/WithLoading";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type Props = WithLoadingProps & {
  icon: IconName;
  title: string;
  highlight?: boolean;
};

export const DataCard = withLoading(
  ({ children, icon, title, highlight = false }: PropsWithChildren<Props>) => {
    return (
      <Card className="flex flex-col w-full h-full">
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
              "h-4 w-4": !highlight,
            })}
          />
        </CardHeader>
        <CardContent className="grow h-36 flex flex-col justify-start pb-0">
          {children}
        </CardContent>
      </Card>
    );
  }
);
