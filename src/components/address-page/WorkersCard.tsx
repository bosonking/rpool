import { AddressWorker } from "@/domain/address";
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
import { useNavigate } from "react-router-dom";

type Props = {
  address?: string;
  workers: AddressWorker[];
  loading?: boolean;
};

export const WorkersCard = ({ address, workers, loading: loading }: Props) => {
  const navigate = useNavigate();
  const navigateToWorker = (worker: AddressWorker) => {
    navigate(`/${address}/${worker.name}/${worker.sessionId}`);
  };
  if (!address) return null;

  return (
    <DataCard icon="Server" title="Workers" loading={loading}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="hidden md:table-cell">Session ID</TableHead>
            <TableHead>Hash Rate</TableHead>
            <TableHead>Session Best Difficulty</TableHead>
            <TableHead>Uptime</TableHead>
            <TableHead className="hidden md:table-cell">Last Seetn</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {workers.map((worker) => (
            <TableRow
              className="cursor-pointer"
              key={worker.sessionId}
              onClick={() => navigateToWorker(worker)}
            >
              <TableCell>{worker.name}</TableCell>
              <TableCell className="hidden md:table-cell">
                {worker.sessionId}
              </TableCell>
              <TableCell>{formatHashRate(worker.hashRate)}</TableCell>
              <TableCell>{formatDifficulty(worker.bestDifficulty)}</TableCell>
              <TableCell>{formatRelativeTime(worker.startTime)}</TableCell>
              <TableCell className="hidden md:table-cell">
                {formatRelativeTime(worker.lastSeen)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </DataCard>
  );
};
