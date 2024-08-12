import { HashRateChartData } from "@/domain/chart";
import { NetworkData } from "@/domain/network";
import { WorkerData } from "@/domain/worker";
import { fetchChart } from "@/lib/chart-fetcher";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = import.meta.env.PUBLIC_API_URL;

export const useWorkerPage = () => {
  const { address } = useParams();
  const [workerData, setWorkerData] = useState<WorkerData | null>(null);
  const [networkData, setNetworkData] = useState<NetworkData | null>(null);
  const [hashRateChartData, setHashRateChartData] = useState<
    HashRateChartData[]
  >([]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    Promise.all([
      fetch(`${API_URL}/api/client/${address}`)
        .then((response) => response.json())
        .then((data) => setWorkerData(data)),
      fetchChart(address).then((data) => setHashRateChartData(data)),
      fetch(`${API_URL}/api/network`)
        .then((response) => response.json())
        .then((data) => setNetworkData(data)),
    ])
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [address]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    workerData,
    networkData,
    hashRateChartData,
    refetch: fetchData,
    loading,
  };
};
