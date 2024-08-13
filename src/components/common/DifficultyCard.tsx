import { formatDifficulty, formatNumber } from "@/lib/formatters";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { withLoading, WithLoadingProps } from "@/hocs/WithLoading";

type Props = WithLoadingProps & {
  difficulty: number;
  title: string;
};

export const DifficultyCard = withLoading(({ difficulty, title }: Props) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="text-3xl text-foreground">
          {formatDifficulty(difficulty ?? 0)}
          <div className="text-xs text-muted-foreground">
            {formatNumber(difficulty ?? 0)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
});
