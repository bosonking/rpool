import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { HashRateChartData } from "@/domain/chart";
import { formatHashRate } from "@/lib/formatters";
import { movingAvg } from "@/lib/moving-avg";
import { useEffect, useMemo, useState } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { DataCard } from "./DataCard";

type ChartDataWithSMA = HashRateChartData & { sma?: number | null };

type Props = {
  data: HashRateChartData[];
  loading?: boolean;
  movingAveragePeriod?: number;
};

const chartConfig: ChartConfig = {
  hashRate: {
    label: "10 minutes Hash Rate",
    color: "hsl(var(--chart-3))",
  },
};

export const ChartCard = ({
  data,
  loading,
  movingAveragePeriod = 12,
}: Props) => {
  const [chartData, setChartData] = useState<ChartDataWithSMA[]>(
    data.map((v) => ({ ...v, sma: null }))
  );

  const hours = useMemo(() => movingAveragePeriod / 6, [movingAveragePeriod]);

  useEffect(() => {
    chartConfig.sma = {
      label: `${hours.toLocaleString()} hours Hash Rate`,
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
  }, [data, movingAveragePeriod, hours]);

  return (
    <DataCard
      icon="ChartLine"
      title="Hash Rate in the last 24 hours"
      loading={loading}
      highlight={true}
    >
      <ChartContainer
        config={chartConfig}
        className="min-h-80 w-full aspect-square"
      >
        <LineChart accessibilityLayer data={chartData}>
          <ChartLegend content={<ChartLegendContent />} />
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
            content={
              <ChartTooltipContent
                hideLabel
                indicator="line"
                formatter={(value, name) => {
                  const config = chartConfig[name as keyof typeof chartConfig];
                  return (
                    <div className="flex min-w-52 items-center text-xs text-muted-foreground gap-2">
                      <div
                        className={"h-2 w-2 shrink-0 rounded-[2px]"}
                        style={{ backgroundColor: config.color }}
                      ></div>
                      {config?.label || name}
                      <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                        {formatHashRate(+value)}
                      </div>
                    </div>
                  );
                }}
              />
            }
          />

          <Line
            dataKey="hashRate"
            type="natural"
            stroke="hsl(var(--chart-3))"
            strokeWidth={2}
            dot={false}
          />
          <Line
            connectNulls
            dataKey="sma"
            type="natural"
            stroke="hsl(var(--chart-5))"
            strokeWidth={2}
            dot={{
              stroke: "hsl(var(--chart-5))",
              fill: "hsl(var(--card))",
              r: 4,
            }}
          />
        </LineChart>
      </ChartContainer>
    </DataCard>
  );
};
