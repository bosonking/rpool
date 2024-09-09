import { SessionData } from "@/domain/types/session";
import { useChartMean } from "@/hooks/useChartMean";
import { useParams } from "react-router-dom";
import useSWR from "swr";

export const useSessionPage = () => {
  const { address, worker, sessionId } = useParams();
  const {
    data: workerData,
    isLoading: loading,
    mutate: refetch,
  } = useSWR<SessionData>(`/api/client/${address}/${worker}/${sessionId}`);

  const { mean } = useChartMean(workerData?.chartData ?? []);

  return { address, worker, sessionId, workerData, refetch, loading, mean };
};
