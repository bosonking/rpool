import { formatRelativeTime } from "@/lib/formatters";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type Props = {
  startTime: string;
};

export const UptimeCard = ({ startTime }: Props) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Uptime</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="text-3xl text-zinc-300">
          {formatRelativeTime(startTime)}
          <div className="text-sm text-zinc-500">
            Since {new Date(startTime).toLocaleString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
