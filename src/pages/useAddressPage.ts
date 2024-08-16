import { AddressData } from "@/domain/types/address";
import { RawChartData } from "@/domain/types/chart";
import { NetworkData } from "@/domain/types/network";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

export const useAddressPage = () => {
  const { address } = useParams();
  const {
    data: workerData,
    isLoading: loadingWorker,
    mutate: mutateWorker,
  } = useSWR<AddressData>(`/api/client/${address}`);

  const {
    data: networkData,
    isLoading: loadingNetwork,
    mutate: mutateNetwork,
  } = useSWR<NetworkData>(`/api/network`);

  const {
    data: chartData = [],
    isLoading: loadingChart,
    mutate: mutateChart,
  } = useSWR<RawChartData[]>(`/api/client/${address}/chart`);

  const loading = useMemo(
    () => loadingWorker || loadingNetwork || loadingChart,
    [loadingChart, loadingNetwork, loadingWorker]
  );

  const refetch = () => {
    mutateWorker();
    mutateNetwork();
    mutateChart();
  };

  return {
    address,
    chartData,
    loading,
    networkData,
    workerData,
    refetch,
  };
};
