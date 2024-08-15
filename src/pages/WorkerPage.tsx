import { ChartCard } from "@/components/common/ChartCard";
import { DifficultyCard } from "@/components/common/DifficultyCard";
import { Navigation } from "@/components/common/Navigation";
import { IdCard } from "@/components/worker-page/IdCard";
import { UptimeCard } from "@/components/worker-page/UptimeCard";
import { useWorkerPage } from "./useWorkerPage";

export function WorkerPage() {
  const { address, worker, sessionId, workerData, refetch, loading } =
    useWorkerPage();
  return (
    <>
      <Navigation
        address={address}
        worker={worker}
        sessionId={sessionId}
        onClickRefresh={refetch}
        loading={loading}
      />
      <div className="flex flex-col w-full h-full gap-2 md:gap-4">
        <div className="grid gap-2 md:gap-4 md:grid-cols-3">
          <IdCard name={worker ?? ""} sessionId={sessionId ?? ""} />
          <DifficultyCard
            difficulty={workerData?.bestDifficulty ?? 0}
            title="Your best difficulty"
            loading={loading}
          />
          <UptimeCard
            startTime={workerData?.startTime ?? ""}
            loading={loading}
          />
        </div>

        <ChartCard data={workerData?.chartData ?? []} loading={loading} />
      </div>
    </>
  );
}
