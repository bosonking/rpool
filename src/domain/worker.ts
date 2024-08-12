type Worker = {
  bestDifficulty: number;
  hashRate: number;
  lastSeen: string;
  name: string;
  sessionId: string;
  startTime: string;
};

export type WorkerData = {
  bestDifficulty: number;
  workers: Worker[];
  workersCount: number;
};
