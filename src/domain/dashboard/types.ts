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

export type InfoData = {
  highScores: HighScore[];
  userAgents: UserAgent[];
  uptime: string;
};
