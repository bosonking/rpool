import { RawChartData } from "@/domain/types/chart";
import { useMemo } from "react";

export const useChartMean = (chartData: RawChartData[]) => {
  const mean = useMemo(() => {
    if (!chartData) {
      return 0;
    }

    return (
      chartData.reduce((acc, worker) => acc + worker.data, 0) / chartData.length
    );
  }, [chartData]);

  return { mean };
};
