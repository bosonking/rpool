import { ChartCard } from "@/components/common/ChartCard";
import { Navigation } from "@/components/common/Navigation";
import { ConnectCard } from "@/components/dashboard-page/ConnectCard";
import { DonateCard } from "@/components/dashboard-page/DonateCard";
import { FoundBlocksCard } from "@/components/dashboard-page/FoundBlocksCard";
import { HighScoresCard } from "@/components/dashboard-page/HighScoresCard";
import { OnlineDevicesCard } from "@/components/dashboard-page/OnlineDevicesCard";
import { SearchCard } from "@/components/dashboard-page/SearchCard";
import { useDashboardPage } from "./useDashboardPage";

export function DashboardPage() {
  const { infoData, hashRateChartData, refetch, loading } = useDashboardPage();
  return (
    <>
      <Navigation onClickRefresh={refetch} loading={loading} />
      <div className="grid gap-2 md:gap-4 lg:grid-cols-3">
        <ConnectCard />
        <SearchCard />
        <DonateCard />
      </div>
      {infoData?.blockData && infoData?.blockData.length > 0 ? (
        <>
          <ChartCard data={hashRateChartData} loading={loading} />
          <div className="grid gap-2 md:gap-4 lg:grid-cols-3">
            <div className="">
              <HighScoresCard
                highScores={infoData?.highScores}
                loading={loading}
              />
            </div>
            <div className="">
              <FoundBlocksCard
                foundBlocks={infoData?.blockData}
                loading={loading}
              />
            </div>
            <div className="">
              <OnlineDevicesCard
                onlineDevices={infoData?.userAgents}
                loading={loading}
              />
            </div>
          </div>
        </>
      ) : (
        <div className="grid gap-2 md:gap-4 lg:grid-cols-4 h-full">
          <div className="lg:col-start-1">
            <HighScoresCard
              highScores={infoData?.highScores}
              loading={loading}
            />
          </div>
          <div className="lg:col-start-2 lg:col-span-2">
            <ChartCard data={hashRateChartData} loading={loading} />
          </div>
          <div className="lg:col-start-4">
            <OnlineDevicesCard
              onlineDevices={infoData?.userAgents}
              loading={loading}
            />
          </div>
        </div>
      )}
    </>
  );
}
