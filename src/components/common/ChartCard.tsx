import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { RawChartData } from "@/domain/types/chart";
import { formatHashRate } from "@/lib/formatters";
import { movingAvg } from "@/lib/moving-avg";
import { useEffect, useState } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { DataCard } from "./DataCard";

type ChartDataWithSMA = RawChartData & {
  sma?: number | null;
  mean?: number | null;
};

const TICKS_PER_HOUR = 6 as const;
const MOVING_AVERAGE_PERIOD = 12 as const;

type Props = {
  title: string;
  data: RawChartData[];
  loading?: boolean;
  mean?: number;
};

const chartConfig: ChartConfig = {
  data: {
    label: "10 minutes Hash Rate",
    color: "hsl(var(--chart-3))",
  },
  sma: {
    label: `${(
      MOVING_AVERAGE_PERIOD / TICKS_PER_HOUR
    ).toLocaleString()} hours Hash Rate`,
    color: "hsl(var(--chart-5))",
  },
  mean: {
    label: "Mean Hash Rate",
    color: "hsl(var(--chart-4))",
  },
};

export const ChartCard = ({ data, loading, title, mean }: Props) => {
  const [chartData, setChartData] = useState<ChartDataWithSMA[]>(
    data.map((v) => ({ ...v, sma: null }))
  );

  useEffect(() => {
    const sma = movingAvg(
      data.map((v) => v.data),
      MOVING_AVERAGE_PERIOD
    );
    const effectiveMean =
      mean ?? data.reduce((acc, v) => acc + v.data, 0) / data.length;

    setChartData(
      data.map((v, i, a) => {
        if (i === 0 || a.length - 1 === i)
          return { ...v, sma: null, mean: effectiveMean };
        if (i % 6 !== 0) return { ...v, sma: null };
        return { ...v, sma: sma[i] };
      })
    );
  }, [data, mean]);

  if (data.length === 0) return null;

  return (
    <DataCard icon="ChartLine" title={title} loading={loading}>
      <ChartContainer config={chartConfig} className="min-h-40 w-full">
        <LineChart accessibilityLayer data={chartData}>
          <ChartLegend content={<ChartLegendContent />} />
          <CartesianGrid />
          <XAxis
            dataKey="label"
            tickMargin={8}
            domain={[0, "dataMax"]}
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
                labelFormatter={(value) => new Date(value).toLocaleString()}
                formatter={(value, name) => {
                  const config = chartConfig[name as keyof typeof chartConfig];
                  return (
                    <div className="flex justify-between w-60 items-center text-xs text-muted-foreground gap-2">
                      <div className="flex items-center gap-1">
                        <div
                          className={"h-2 w-2 shrink-0 rounded-[2px]"}
                          style={{ backgroundColor: config?.color }}
                        ></div>
                        {config?.label || name}
                      </div>
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
            dataKey="data"
            type="linear"
            stroke={chartConfig.data.color}
            strokeWidth={2}
            dot={{
              stroke: chartConfig.data.color,
              fill: "hsl(var(--card))",
              r: 1,
            }}
          />
          <Line
            connectNulls
            dataKey="sma"
            type="natural"
            stroke={chartConfig.sma.color}
            strokeWidth={2}
            dot={{
              stroke: chartConfig.sma.color,
              fill: "hsl(var(--card))",
              r: 4,
            }}
          />

          <Line
            connectNulls
            dataKey="mean"
            type="natural"
            stroke={chartConfig.mean.color}
            strokeWidth={2}
            dot={{
              stroke: chartConfig.mean.color,
              fill: "hsl(var(--card))",
              r: 4,
            }}
          />
        </LineChart>
      </ChartContainer>
    </DataCard>
  );
};
