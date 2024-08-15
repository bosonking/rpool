import { DataCard } from "@/components/common/DataCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HighScore } from "@/domain/dashboard";
import { formatDifficulty, formatRelativeTime } from "@/lib/formatters";
import { FosshDevice } from "../common/FosshDevice";

type Props = {
  highScores?: HighScore[];
  loading?: boolean;
};

export const HighScoresCard = ({ highScores = [], loading }: Props) => {
  return (
    <DataCard title="High Scores" icon="TrendingUp" loading={loading}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Rank</TableHead>
            <TableHead>Difficulty</TableHead>
            <TableHead>Device</TableHead>
            <TableHead>When</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {highScores.map((highScore, i) => (
            <TableRow key={highScore.bestDifficultyUserAgent + i}>
              <TableCell>#{i + 1}</TableCell>
              <TableCell>
                {formatDifficulty(highScore.bestDifficulty)}
              </TableCell>
              <TableCell>
                <FosshDevice userAgent={highScore.bestDifficultyUserAgent} />
              </TableCell>
              <TableCell>{formatRelativeTime(highScore.updatedAt)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </DataCard>
  );
};
