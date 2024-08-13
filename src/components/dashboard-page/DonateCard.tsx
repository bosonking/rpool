import qrCode from "@/assets/qr-code.svg";
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
      <CardContent className="flex flex-row gap-2 justify-between items-center">
        <p className="grow text-center text-md text-muted-foreground leading-8">
          <code>rpool</code> is based on{" "}
          <a
            href="https://github.com/benjamin-wilson/public-pool-ui"
            className="underline"
          >
            public-pool-ui
          </a>
          .<br />
          Like the project? Consider a donation.
        </p>
        <div className="grow">
          <QrChart src={qrCode} alt="bosonking@getalby.com" label="Lightning" />
        </div>
      </CardContent>
    </Card>
  );
};
