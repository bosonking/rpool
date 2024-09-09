import { RawChartData } from "./chart";

export type SessionData = {
  bestDifficulty: number;
  chartData: RawChartData[];
  name: string;
  sessionId: string;
  startTime: string;
};
