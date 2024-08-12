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
            <TableRow
              className="cursor-pointer"
              key={worker.sessionId}
              onClick={() => navigateToWorker(worker)}
            >
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
