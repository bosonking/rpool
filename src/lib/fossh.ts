export const fosshDevices = {
  NerdMiner: "https://github.com/BitMaker-hub/NerdMiner_v2",
  NerdAxe: "https://github.com/BitMaker-hub/NerdAxeUltra",
  PiAxe: "https://github.com/shufps/piaxe",
  QAxe: "https://github.com/shufps/qaxe",
  "QAxe+": "https://github.com/shufps/qaxe",
  "0xAxe": "https://github.com/shufps/0xaxe",
  bitaxe: "https://github.com/skot/bitaxe/",
  bitaxeHex: "https://github.com/skot/bitaxeHex/",
  cpuminer: "https://github.com/pooler/cpuminer",
  cgminer: "https://cgminer.info/",
  Braiins: "https://braiins.com/os/plus",
  termux: "https://github.com/wong-fi-hung/termux-miner",
  LeafMiner: "https://github.com/matteocrippa/leafminer",
} as const;

export type FosshDevices = keyof typeof fosshDevices;
