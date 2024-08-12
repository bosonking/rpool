import { HashRateChartData } from "./chart";

export type WorkerData = {
  bestDifficulty: number;
  chartData: HashRateChartData[];
  name: string;
  sessionId: string;
  startTime: string;
};

export type WorkerDataDTO = Omit<WorkerData, "chartData"> & {
  chartData: { label: string; data: number }[];
};
