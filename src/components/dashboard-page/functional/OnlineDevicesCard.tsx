import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserAgent } from "@/domain/dashboard";
import { formatDifficulty, formatHashRate } from "@/lib/formatters";
import { DataCard } from "../../common/DataCard";

type Props = {
  onlineDevices?: UserAgent[];
  loading?: boolean;
};

export const OnlineDevicesCard: React.FC<Props> = ({
  onlineDevices = [],
  loading,
}) => {
  return (
    <DataCard icon="Activity" title="Online Devices" loading={loading}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Device</TableHead>
            <TableHead>Count</TableHead>
            <TableHead>Hash Rate</TableHead>
            <TableHead>Best Diff.</TableHead>
          </TableRow>
        </TableHeader>
        {onlineDevices.length === 0 ? (
          <TableCaption>No data</TableCaption>
        ) : (
          <>
            <TableBody>
              {onlineDevices.map((onlineDevice, i) => (
                <TableRow key={onlineDevice.userAgent + i}>
                  <TableCell>{onlineDevice.userAgent}</TableCell>
                  <TableCell>{onlineDevice.count}</TableCell>
                  <TableCell className="text-right">
                    {formatHashRate(onlineDevice.totalHashRate)}
                  </TableCell>
                  <TableCell className="text-right">
                    {formatDifficulty(onlineDevice.bestDifficulty)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </>
        )}
      </Table>
    </DataCard>
  );
};
