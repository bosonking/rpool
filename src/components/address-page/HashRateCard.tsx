import { formatHashRate } from "@/lib/formatters";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { withLoading, WithLoadingProps } from "@/hocs/WithLoading";

type Props = WithLoadingProps & {
  hashRate: number;
  title: string;
};

export const HashRateCard = withLoading(({ hashRate, title }: Props) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="text-3xl text-foreground">
          {formatHashRate(hashRate ?? 0)}
        </div>
      </CardContent>
    </Card>
  );
});
