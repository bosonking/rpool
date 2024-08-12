import { useWorkerPage } from "@/hooks/useWorkerPage";

export function WorkerPage() {
  const { networkData } = useWorkerPage();
  return (
    <>
      <h1>Your Workers of {networkData?.blocks}</h1>
    </>
  );
}
