import React from "react";

export type NavigationItemProps = {
  key: string;
  href: string;
  label: React.ReactNode;
};

export const NavigationItem: React.FC<NavigationItemProps> = ({
  href,
  label,
}) => {
  return (
    <a
      href={href}
      className="text-muted-foreground transition-colors hover:text-foreground"
    >
      {label}
    </a>
  );
};
