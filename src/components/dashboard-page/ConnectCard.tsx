import { CardContent } from "@/components/ui/card";
import { DataCard } from "../common/DataCard";

const STRATUM_HOST = import.meta.env.PUBLIC_STRATUM_HOST;
const STRATUM_PORT = import.meta.env.PUBLIC_STRATUM_PORT;

export const ConnectCard = () => {
  return (
    <DataCard icon="Pickaxe" title="Connect to the pool">
      <CardContent className="flex-col gap-2 text-foreground text-md md:text-lg">
        <div>
          Host:{" "}
          <span className="text-muted-foreground">
            stratum-tcp://{STRATUM_HOST}:{STRATUM_PORT}
          </span>
        </div>
        <div>
          Username:{" "}
          <span className="md:text-sm text-muted-foreground font-mono">
            &lt;your bitcoin address&gt;.&lt;device name&gt;
          </span>
          <div className="text-xs text-zinc-500">
            Example:{" "}
            <span className="text-zinc-600">
              bc1qar0sxrr7xfkvy5l643lydnw9re59gazzwf5mdd.bitaxe
            </span>
          </div>
        </div>
        <div>
          Password: <span className="text-zinc-500">x</span>
          <div className="text-xs text-zinc-500">
            The password is not relevant
          </div>
        </div>
      </CardContent>
    </DataCard>
  );
};
