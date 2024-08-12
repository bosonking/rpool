import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { HashRateChartData } from "@/domain/dashboard/types";
import { formatHashRate } from "@/utils";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { DataCard } from "../ui/DataCard ";

type Props = {
  data: HashRateChartData[];
  loading?: boolean;
};

const chartConfig = {
  hashRate: {
    label: "Hash Rate",
    color: "hsl(var(--chart-1))",
  },
};

export const ChartCard = ({ data, loading }: Props) => (
  <DataCard
    icon="ChartLine"
    title="Hash Rate in last 24 hours"
    loading={loading}
  >
    <ChartContainer config={chartConfig} className="min-h-80 w-full">
      <LineChart accessibilityLayer data={data}>
        <CartesianGrid />
        <XAxis
          dataKey="dateTime"
          tickMargin={8}
          tickFormatter={(value) =>
            Intl.DateTimeFormat("en", {
              hour: "numeric",
              minute: "numeric",
              hour12: false,
            }).format(new Date(value))
          }
        />
        <YAxis tickFormatter={(value) => formatHashRate(value)} width={100} />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Line
          dataKey="hashRate"
          type="natural"
          stroke="hsl(var(--chart-3))"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  </DataCard>
);
