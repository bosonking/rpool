/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export type WithLoadingProps = {
  loading?: boolean;
  loadingFallback?: React.ReactNode;
};

export function withLoading<T extends WithLoadingProps>(
  WrappedComponent: React.ComponentType<T>
) {
  const name =
    WrappedComponent.displayName ?? WrappedComponent.name ?? "Component";

  const Component = (props: T) => {
    const { loading, loadingFallback, ...rest } = props;
    if (loading) {
      return loadingFallback ?? <Skeleton className="w-full h-full" />;
    }
    return <WrappedComponent {...(rest as T)} />;
  };

  Component.displayName = `withLoading(${name})`;

  return Component;
}
