import { ConnectCard } from "../functional/ConnectCard";
import { DonateCard } from "../functional/DonateCard";
import { SearchCard } from "../functional/SearchCard";

export const StaticCards = () => {
  return (
    <div className="grid gap-2 md:gap-4 lg:grid-cols-3">
      <ConnectCard />
      <SearchCard />
      <DonateCard />
    </div>
  );
};
