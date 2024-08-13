import { formatRelativeTime } from "@/lib/formatters";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { withLoading, WithLoadingProps } from "@/hocs/WithLoading";

type Props = WithLoadingProps & {
  startTime: string;
};

export const UptimeCard = withLoading(({ startTime }: Props) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Uptime</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="text-3xl text-foreground">
          {formatRelativeTime(startTime)}
          <div className="text-sm text-muted-foreground">
            Since {new Date(startTime).toLocaleString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
});
