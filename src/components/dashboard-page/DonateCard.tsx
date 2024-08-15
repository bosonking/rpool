import qrCode from "@/assets/qr-code.svg";
import {
  Card,
  CardContent,
  CardHeader,
  CardIcon,
  CardTitle,
} from "@/components/ui/card";

export const DonateCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Donate</CardTitle>
        <CardIcon name="HandCoins" size="large" />
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row gap-2 justify-between items-center">
        <p className="text-center text-md text-muted-foreground leading-8">
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
        <div className="flex flex-col gap-1 items-center justify-center">
          <img
            src={qrCode}
            alt="bosonking@getalby.com"
            className="w-28 aspect-square"
          />
          <p className="text-xs text-muted-foreground">Lightning</p>
        </div>
      </CardContent>
    </Card>
  );
};
