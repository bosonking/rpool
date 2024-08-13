import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pickaxe } from "lucide-react";

const STRATUM_HOST = import.meta.env.PUBLIC_STRATUM_HOST;
const STRATUM_PORT = import.meta.env.PUBLIC_STRATUM_PORT;

export const ConnectCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl">Connect to the pool</CardTitle>
        <Pickaxe className="h-8 w-8 text-muted-foreground" />
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="text-lg text-foreground">
          Host:{" "}
          <span className="text-muted-foreground">
            stratum-tcp://{STRATUM_HOST}:{STRATUM_PORT}
          </span>
        </div>
        <div className="text-lg text-foreground">
          Username:{" "}
          <span className="text-zinc-500">
            &lt;your bitcoin address&gt;.&lt;device name&gt;
          </span>
          <div className="text-xs text-zinc-500">
            Example:{" "}
            <span className="text-zinc-600">
              bc1qar0sxrr7xfkvy5l643lydnw9re59gazzwf5mdd.bitaxe
            </span>
          </div>
        </div>
        <div className="text-lg text-foreground">
          Password: <span className="text-zinc-500">x</span>
          <div className="text-xs text-zinc-500">
            The password is not relevant
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
