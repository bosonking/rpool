import { Card, CardContent } from "@/components/ui/card";
import { formatRelativeTime } from "@/lib/formatters";
import { RefreshCcw } from "lucide-react";

type Props = {
  uptime?: string;
  onClickRefresh: () => void;
};

export const InfoCard = ({ uptime, onClickRefresh }: Props) => {
  if (!uptime) {
    return null;
  }

  const handleOnClickRefresh = () => {
    onClickRefresh();
  };

  return (
    <Card>
      <CardContent className="flex flex-row justify-between items-center gap-2 pt-6">
        <p className="text-lg text-zinc-300">
          We are up since {formatRelativeTime(uptime)}
        </p>
        <RefreshCcw
          className="h-8 w-8 text-muted-foreground"
          onClick={handleOnClickRefresh}
        />
      </CardContent>
    </Card>
  );
};
