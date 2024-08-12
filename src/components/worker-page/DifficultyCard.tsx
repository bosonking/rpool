import { formatDifficulty, formatNumber } from "@/lib/formatters";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type Props = {
  difficulty: number;
  title: string;
};

export function DifficultyCard({ difficulty, title }: Props) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="text-3xl text-zinc-300">
          {formatDifficulty(difficulty ?? 0)}
          <div className="text-xs text-zinc-500">
            {formatNumber(difficulty ?? 0)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
