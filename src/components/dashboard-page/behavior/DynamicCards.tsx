import { useDynamicCards } from "./useDynamicCards";
import { HighScoresCard } from "../functional/HighScoresCard";
import { OnlineDevicesCard } from "../functional/OnlineDevicesCard";

export const DynamicCards = () => {
  const { infoData, loading } = useDynamicCards();
  return (
    <div className="grid gap-2 md:gap-4 lg:grid-cols-4">
      <div className="lg:col-start-1">
        <HighScoresCard highScores={infoData?.highScores} />
      </div>
      <div className="lg:col-start-4">
        <OnlineDevicesCard
          onlineDevices={infoData?.userAgents}
          loading={loading}
        />
      </div>
    </div>
  );
};
