import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserAgent } from "@/domain/dashboard/types";
import { formatDifficulty, formatHashRate } from "@/utils";
import { TableUICard } from "../ui/TableUICard ";

type Props = {
  onlineDevices?: UserAgent[];
  loading?: boolean;
};

export const OnlineDevicesCard: React.FC<Props> = ({
  onlineDevices = [],
  loading,
}) => {
  return (
    <TableUICard icon="Activity" title="Online Devices" loading={loading}>
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
                  <TableCell>#{i + 1}</TableCell>
                  <TableCell>{onlineDevice.count}</TableCell>
                  <TableCell>
                    {formatHashRate(onlineDevice.totalHashRate)}
                  </TableCell>
                  <TableCell>
                    {formatDifficulty(onlineDevice.bestDifficulty)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </>
        )}
      </Table>
    </TableUICard>
  );
};
