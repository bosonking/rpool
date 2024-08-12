import { Worker } from "@/domain/worker";
import { DataCard } from "../common/DataCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  formatDifficulty,
  formatHashRate,
  formatRelativeTime,
} from "@/lib/formatters";

type Props = {
  workers: Worker[];
  loading?: boolean;
};

export const WorkersCard = ({ workers, loading: loading }: Props) => {
  return (
    <DataCard icon="Server" title="Workers" highlight loading={loading}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Session ID</TableHead>
            <TableHead>Hash Rate</TableHead>
            <TableHead>Session Best Difficulty</TableHead>
            <TableHead>Uptime</TableHead>
            <TableHead>Last Seetn</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {workers.map((worker) => (
            <TableRow key={worker.sessionId}>
              <TableCell>{worker.name}</TableCell>
              <TableCell>{worker.sessionId}</TableCell>
              <TableCell>{formatHashRate(worker.hashRate)}</TableCell>
              <TableCell>{formatDifficulty(worker.bestDifficulty)}</TableCell>
              <TableCell>{formatRelativeTime(worker.startTime)}</TableCell>
              <TableCell>{formatRelativeTime(worker.lastSeen)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </DataCard>
  );
};
