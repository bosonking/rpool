import onChainPublicPoolAddress from "@/assets/onchain_public_pool.svg";
import offChainPublicPoolAddress from "@/assets/offchain_public_pool.svg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HandCoins } from "lucide-react";
import { QrChart } from "./QrChart";

export const DonateCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl">Donate</CardTitle>
        <HandCoins className="h-8 w-8 text-muted-foreground" />
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p className="text-md text-zinc-300 leading-8">
          This project is open-source and free to use. It is based on{" "}
          <a
            href="https://github.com/benjamin-wilson/public-pool-ui"
            className="underline"
          >
            public-pool-ui
          </a>
          .<br />
          Like the project? Consider a donation.
        </p>
        <div className="flex flex-row items-center justify-between gap-2">
          <QrChart
            src={onChainPublicPoolAddress}
            alt="bc1q99n3pu025yyu0jlywpmwzalyhm36tg5u37w20d"
            label="On-chain"
          />
          <QrChart
            src={offChainPublicPoolAddress}
            alt="public_pool@strike.me"
            label="Off-chain"
          />
        </div>
      </CardContent>
    </Card>
  );
};
