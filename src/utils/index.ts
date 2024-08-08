type Suffixes = [string, string, string, string, string, string, string];
const DIFFICULTY_SUFFIXES: Suffixes = ["", "k", "M", "G", "T", "P", "E"];
const HASH_RATE_SUFFIXES: Suffixes = [
  " H/s",
  " KH/s",
  " MH/s",
  " GH/s",
  " TH/s",
  " PH/s",
  " EH/s",
];

function magnitudeFormater(value: number, suffixes: Suffixes): string {
  if (value == null || value < 0) {
    return "0";
  }

  let power = Math.floor(Math.log10(value) / 3);
  if (power < 0) {
    power = 0;
  }
  const scaledValue = value / Math.pow(1000, power);
  const suffix = suffixes[power];

  return scaledValue.toFixed(2) + suffix;
}

export function formatDifficulty(value: number): string {
  return magnitudeFormater(value, DIFFICULTY_SUFFIXES);
}

export function formatHashRate(value: number): string {
  return magnitudeFormater(value, HASH_RATE_SUFFIXES);
}

export function formatRelativeTime(value?: string | number): string {
  if (value) {
    const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
    if (seconds < 29)
      // less than 30 seconds ago will show as 'Just now'
      return "Just now";
    const intervals: { [key: string]: number } = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1,
    };
    let counter;
    for (const i in intervals) {
      counter = Math.floor(seconds / intervals[i]);
      if (counter > 0)
        if (counter === 1) {
          return counter + " " + i + ""; // singular (1 day ago)
        } else {
          return counter + " " + i + "s"; // plural (2 days ago)
        }
    }
  }
  return "";
}
