import { RawChartData } from "./chart";

export type WorkerData = {
  bestDifficulty: number;
  chartData: RawChartData[];
  name: string;
  sessionId: string;
  startTime: string;
};
