import { Card, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import { IconName } from "@/components/ui/icon";
import { withLoading, WithLoadingProps } from "@/hocs/WithLoading";
import { PropsWithChildren } from "react";

type DataCardProps = WithLoadingProps & {
  icon: IconName;
  title: string;
};

export const DataCard = withLoading(
  ({ children, icon, title }: PropsWithChildren<DataCardProps>) => {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardIcon name={icon} size="large" />
        </CardHeader>
        {children}
      </Card>
    );
  }
);
