import { RawChartData } from "@/domain/types/chart";
import { PoolData } from "@/domain/types/dashboard";
import { useMemo } from "react";
import useSWR from "swr";

export const useDashboardPage = () => {
  const {
    data: infoData,
    isLoading: loadingInfo,
    mutate: mutateInfo,
  } = useSWR<PoolData>(`/api/info`);

  const {
    data: chartData = [],
    isLoading: loadingChart,
    mutate: mutateChart,
  } = useSWR<RawChartData[]>(`/api/info/chart`);

  const loading = useMemo(
    () => loadingInfo || loadingChart,
    [loadingInfo, loadingChart]
  );

  const refetch = () => {
    mutateInfo();
    mutateChart();
  };

  return {
    chartData,
    infoData,
    loading,
    refetch,
  };
};
