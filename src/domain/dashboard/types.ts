export type HighScore = {
  bestDifficulty: number;
  bestDifficultyUserAgent: string;
  updatedAt: string;
};

export type UserAgent = {
  bestDifficulty: number;
  count: number;
  totalHashRate: number;
  userAgent: string;
};

export type BlockData = {
  height: number;
  address: string;
  worker: string;
  session: string;
};

export type InfoData = {
  highScores: HighScore[];
  userAgents: UserAgent[];
  blockData: BlockData[];
  uptime: string;
};

export type HashRateChartData = {
  dateTime: string;
  hashRate: number;
};
