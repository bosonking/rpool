import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BlockData } from "@/domain/dashboard";
import { DataCard } from "../common/DataCard";

type Props = {
  foundBlocks?: BlockData[];
  loading?: boolean;
};

export const FoundBlocksCard: React.FC<Props> = ({
  foundBlocks = [],
  loading,
}) => {
  return (
    <DataCard
      icon="Bitcoin"
      title="Found Blocks 🎉"
      loading={loading}
      highlight
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Height</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Worker</TableHead>
            <TableHead>Session</TableHead>
          </TableRow>
        </TableHeader>
        {foundBlocks.length === 0 ? (
          <TableCaption>No data</TableCaption>
        ) : (
          <>
            <TableBody>
              {foundBlocks.map((foundBlock) => (
                <TableRow key={foundBlock.height}>
                  <TableCell>{foundBlock.height}</TableCell>
                  <TableCell>{foundBlock.address}</TableCell>
                  <TableCell>{foundBlock.worker}</TableCell>
                  <TableCell>{foundBlock.session}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </>
        )}
      </Table>
    </DataCard>
  );
};
