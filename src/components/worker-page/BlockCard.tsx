import { formatNumber } from "@/lib/formatters";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type Props = {
  height: number;
  wheight: number;
  title: string;
};

export function BlockCard({ height, wheight, title }: Props) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="text-3xl text-zinc-300">
          {height}
          <div className="text-sm text-zinc-500">
            Weight: {formatNumber(wheight)} bytes
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
