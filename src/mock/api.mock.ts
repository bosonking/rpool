import { MockHandler } from "vite-plugin-mock-server";

export default (): MockHandler[] => [
  {
    pattern: "/api/info",
    handle: (_, res) => {
      res.end(
        JSON.stringify({
          blockData: [],
          userAgents: [
            {
              userAgent: "bitaxe",
              count: 1,
              bestDifficulty: 1100623.1619364428,
              totalHashRate: 386346357233.64484,
            },
            {
              userAgent: "nerdminer",
              count: 1,
              bestDifficulty: 100623.1619364428,
              totalHashRate: 57233.64484,
            },
          ],
          highScores: [
            {
              updatedAt: "2024-08-04 12:54:58",
              bestDifficulty: 9739673.675097167,
              bestDifficultyUserAgent: "bitaxe",
            },
            {
              updatedAt: "2024-08-04 12:54:58",
              bestDifficulty: 8739673.675097167,
              bestDifficultyUserAgent: "nerdminer",
            },
          ],
          uptime: "2024-08-05T01:29:03.577Z",
        })
      );
    },
  },
];
