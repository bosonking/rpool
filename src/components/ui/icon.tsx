import { icons } from "lucide-react";

export type IconName = keyof typeof icons;

type Props = {
  name: IconName;
  className?: string;
};

export const Icon = ({ name, className }: Props) => {
  const LucideIcon = icons[name];

  return <LucideIcon className={className} />;
};
