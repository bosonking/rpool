import { BlockCard } from "@/components/address-page/BlockCard";
import { HashRateCard } from "@/components/address-page/HashRateCard";
import { WorkersCard } from "@/components/address-page/WorkersCard";
import { ChartCard } from "@/components/common/ChartCard";
import { DifficultyCard } from "@/components/common/DifficultyCard";
import { Navigation } from "@/components/common/Navigation";
import { useAddressPage } from "./useAddressPage";

export function AddressPage() {
  const {
    address,
    hashRateChartData,
    workerData,
    networkData,
    refetch,
    loading,
  } = useAddressPage();
  return (
    <>
      <Navigation
        address={address}
        onClickRefresh={refetch}
        loading={loading}
      />
      <div className="flex flex-col w-full h-full gap-2 md:gap-4">
        <div className="grid gap-2 md:gap-4 md:grid-cols-4">
          <DifficultyCard
            difficulty={workerData?.bestDifficulty ?? 0}
            title="Your best difficulty"
            loading={loading}
          />
          <DifficultyCard
            difficulty={networkData?.difficulty ?? 0}
            title="Network difficulty"
            loading={loading}
          />
          <HashRateCard
            hashRate={networkData?.networkhashps ?? 0}
            title="Network hash rate"
            loading={loading}
          />
          <BlockCard
            height={networkData?.blocks ?? 0}
            wheight={networkData?.currentblockweight ?? 0}
            title="Block height"
            loading={loading}
          />
        </div>
        <div className="grow grid gap-2 md:gap-4 md:grid-cols-3">
          <WorkersCard
            address={address}
            workers={workerData?.workers ?? []}
            loading={loading}
          />
          <div className="md:col-span-2">
            <ChartCard data={hashRateChartData} loading={loading} />
          </div>
        </div>
      </div>
    </>
  );
}
