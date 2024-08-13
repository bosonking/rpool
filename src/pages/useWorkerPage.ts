import { WorkerData, WorkerDataDTO } from "@/domain/worker";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = import.meta.env.PUBLIC_API_URL;

export const useWorkerPage = () => {
  const { address, worker, sessionId } = useParams();
  const [workerData, setWorkerData] = useState<WorkerData | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    Promise.all([
      fetch(`${API_URL}/api/client/${address}/${worker}/${sessionId}`)
        .then((response) => response.json())
        .then((data: WorkerDataDTO) =>
          setWorkerData({
            ...data,
            chartData: data.chartData.map((v) => ({
              dateTime: v.label,
              hashRate: v.data,
            })),
          })
        ),
    ])
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [address, worker, sessionId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    address,
    worker,
    sessionId,
    workerData,
    refetch: fetchData,
    loading,
  };
};
