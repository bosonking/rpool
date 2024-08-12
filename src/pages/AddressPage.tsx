import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";
import { ChartCard } from "@/components/common/ChartCard";
import { BlockCard } from "@/components/address-page/BlockCard";
import { DifficultyCard } from "@/components/common/DifficultyCard";
import { HashRateCard } from "@/components/address-page/HashRateCard";
import { WorkersCard } from "@/components/address-page/WorkersCard";
import { useAddressPage } from "@/hooks/useAddressPage";

export function AddressPage() {
  const { address, hashRateChartData, workerData, networkData } =
    useAddressPage();
  return (
    <>
      <BreadcrumbNav address={address} />
      <div className="flex flex-col w-full h-full gap-4">
        <div className="grid gap-2 md:gap-4 md:grid-cols-4">
          <DifficultyCard
            difficulty={workerData?.bestDifficulty ?? 0}
            title="Your best difficulty"
          />
          <DifficultyCard
            difficulty={networkData?.difficulty ?? 0}
            title="Network difficulty"
          />
          <HashRateCard
            hashRate={networkData?.networkhashps ?? 0}
            title="Network hash rate"
          />
          <BlockCard
            height={networkData?.blocks ?? 0}
            wheight={networkData?.currentblockweight ?? 0}
            title="Block height"
          />
        </div>
        <div className="grow grid md:grid-cols-3 gap-4">
          <WorkersCard address={address} workers={workerData?.workers ?? []} />
          <div className="md:col-span-2">
            <ChartCard data={hashRateChartData} />
          </div>
        </div>
      </div>
    </>
  );
}
