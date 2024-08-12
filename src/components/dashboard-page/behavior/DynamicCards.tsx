import { ChartCard } from "../../common/ChartCard";
import { FoundBlocksCard } from "../functional/FoundBlocksCard";
import { HighScoresCard } from "../functional/HighScoresCard";
import { InfoCard } from "../functional/InfoCard";
import { OnlineDevicesCard } from "../functional/OnlineDevicesCard";
import { useDynamicCards } from "./useDynamicCards";

export const DynamicCards = () => {
  const { infoData, hashRateChartData, refetch, loading } = useDynamicCards();
  return (
    <>
      <div className="grid">
        <InfoCard uptime={infoData?.uptime} onClickRefresh={() => refetch()} />
      </div>
      {infoData?.blockData && infoData?.blockData.length > 0 ? (
        <>
          <ChartCard data={hashRateChartData} loading={loading} />
          <div className="grid gap-2 md:gap-4 lg:grid-cols-3">
            <div className="min-h-120 max-h-120">
              <HighScoresCard
                highScores={infoData?.highScores}
                loading={loading}
              />
            </div>
            <div className="min-h-120 max-h-120">
              <FoundBlocksCard
                foundBlocks={infoData?.blockData}
                loading={loading}
              />
            </div>
            <div className="min-h-120 max-h-120">
              <OnlineDevicesCard
                onlineDevices={infoData?.userAgents}
                loading={loading}
              />
            </div>
          </div>
        </>
      ) : (
        <div className="grid gap-2 md:gap-4 lg:grid-cols-4">
          <div className="lg:col-start-1 min-h-120 max-h-120">
            <HighScoresCard
              highScores={infoData?.highScores}
              loading={loading}
            />
          </div>
          <div className="lg:col-start-2 lg:col-span-2 min-h-120 max-h-120">
            <ChartCard data={hashRateChartData} loading={loading} />
          </div>
          <div className="lg:col-start-4 min-h-120 max-h-120">
            <OnlineDevicesCard
              onlineDevices={infoData?.userAgents}
              loading={loading}
            />
          </div>
        </div>
      )}
    </>
  );
};
