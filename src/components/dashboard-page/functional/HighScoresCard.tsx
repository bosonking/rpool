import { HighScore } from "@/domain/dashboard/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { TableUICard } from "../ui/TableUICard ";
import { formatDifficulty, formatRelativeTime } from "@/utils";

type Props = {
  highScores?: HighScore[];
  loading?: boolean;
};

export const HighScoresCard = ({ highScores = [], loading }: Props) => {
  return (
    <TableUICard title="High Scores" icon="CreditCard" loading={loading}>
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
              <TableCell>{highScore.bestDifficultyUserAgent}</TableCell>
              <TableCell>{formatRelativeTime(highScore.updatedAt)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableUICard>
  );
};
