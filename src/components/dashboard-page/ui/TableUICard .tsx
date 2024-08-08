import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon, IconName } from "@/components/ui/icon";
import { Skeleton } from "@/components/ui/skeleton";
import { PropsWithChildren } from "react";

type Props = {
  icon: IconName;
  loading?: boolean;
  title: string;
};

export const TableUICard: React.FC<PropsWithChildren<Props>> = ({
  children,
  icon,
  loading,
  title,
}) => {
  if (loading) {
    return (
      <Skeleton className="w-full h-full flex justify-center items-center text-zinc-300">
        Loading...
      </Skeleton>
    );
  }
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon name={icon} className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="flex flex-col justify-center max-h-96">
        {children}
      </CardContent>
    </Card>
  );
};
