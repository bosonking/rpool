import { FosshDevices, fosshDevices } from "@/lib/fossh";
import { Icon } from "../ui/icon";

type Props = {
  userAgent: string;
};

export const FosshDevice = ({ userAgent }: Props) => {
  const url = fosshDevices[userAgent as FosshDevices];
  if (!url) return <>{userAgent}</>;

  return (
    <a
      href={url}
      target="_blank"
      className="underline decoration-dotted hover:decoration-solid flex flex-row"
    >
      {userAgent}
      <Icon name="ExternalLink" className="w-4 h-4 ml-1" />
    </a>
  );
};
