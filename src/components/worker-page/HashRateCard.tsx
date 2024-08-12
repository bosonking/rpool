import { formatHashRate } from "@/lib/formatters";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type Props = {
  hashRate: number;
  title: string;
};

export function HashRateCard({ hashRate, title }: Props) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="text-3xl text-zinc-300">
          {formatHashRate(hashRate ?? 0)}
        </div>
      </CardContent>
    </Card>
  );
}
