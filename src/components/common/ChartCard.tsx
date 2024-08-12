import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { HashRateChartData } from "@/domain/chart";
import { formatHashRate } from "@/lib/formatters";
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";
import { DataCard } from "./DataCard";
import { movingAvg } from "@/lib/moving-avg";
import { useEffect, useState } from "react";

type ChartDataWithSMA = HashRateChartData & { sma?: number | null };

type Props = {
  data: HashRateChartData[];
  loading?: boolean;
} & (
  | {
      showMovingAverage?: false;
      movingAveragePeriod?: never;
    }
  | {
      showMovingAverage: true;
      movingAveragePeriod: number;
    }
);

const chartConfig: ChartConfig = {
  hashRate: {
    label: "Hash Rate",
    color: "hsl(var(--chart-3))",
  },
};

export const ChartCard = ({
  data,
  loading,
  showMovingAverage = true,
  movingAveragePeriod = 12,
}: Props) => {
  const [chartData, setChartData] = useState<ChartDataWithSMA[]>(
    data.map((v) => ({ ...v, sma: null }))
  );
  useEffect(() => {
    if (showMovingAverage) {
      chartConfig.sma = {
        label: `SMA${movingAveragePeriod}`,
        color: "hsl(var(--chart-5))",
      };

      const sma = movingAvg(
        data.map((v) => v.hashRate),
        movingAveragePeriod
      );
      setChartData(
        data.map((v, i) => {
          if (i % 6 !== 0) return { ...v, sma: null };
          return { ...v, sma: sma[i] };
        })
      );
    }
  }, [data, movingAveragePeriod, showMovingAverage]);

  return (
    <DataCard
      icon="ChartLine"
      title="Hash Rate in last 24 hours"
      loading={loading}
      highlight={true}
    >
      <ChartContainer
        config={chartConfig}
        className="min-h-80 w-full aspect-square"
      >
        <LineChart accessibilityLayer data={chartData}>
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
          {showMovingAverage && (
            <>
              <Line
                connectNulls
                dataKey="sma"
                type="natural"
                stroke="hsl(var(--chart-5))"
                strokeWidth={2}
                dot={false}
              />
              <Legend />
            </>
          )}
        </LineChart>
      </ChartContainer>
    </DataCard>
  );
};
