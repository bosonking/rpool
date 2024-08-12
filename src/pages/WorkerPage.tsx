import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";
import { ChartCard } from "@/components/common/ChartCard";
import { DifficultyCard } from "@/components/common/DifficultyCard";
import { IdCard } from "@/components/worker-page/IdCard";
import { UptimeCard } from "@/components/worker-page/UptimeCard";
import { useWorkerPage } from "@/hooks/useWorkerPage";

export function WorkerPage() {
  const { address, worker, sessionId, workerData } = useWorkerPage();
  return (
    <>
      <BreadcrumbNav address={address} worker={worker} sessionId={sessionId} />
      <div className="flex flex-col w-full h-full gap-4">
        <div className="grid gap-2 md:gap-4 md:grid-cols-4">
          <IdCard
            name={workerData?.name ?? ""}
            sessionId={workerData?.sessionId ?? ""}
          />
          <DifficultyCard
            difficulty={workerData?.bestDifficulty ?? 0}
            title="Your best difficulty"
          />
          <UptimeCard startTime={workerData?.startTime ?? ""} />
        </div>

        <ChartCard data={workerData?.chartData ?? []} />
      </div>
    </>
  );
}
