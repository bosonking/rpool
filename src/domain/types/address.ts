export type AddressWorker = {
  bestDifficulty: number;
  hashRate: number;
  lastSeen: string;
  name: string;
  sessionId: string;
  startTime: string;
};

export type AddressData = {
  bestDifficulty: number;
  workers: AddressWorker[];
  workersCount: number;
};
