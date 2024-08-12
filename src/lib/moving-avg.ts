function avg(array: number[]): number {
  let sum = 0;
  let count = 0;
  for (const i in array) {
    sum += array[i];
    count++;
  }

  return sum / count;
}

export function movingAvg(array: number[], count: number): (number | null)[] {
  const result = [];

  for (let i = 0; i < count - 1; i++) result.push(null);

  for (let i = 0, len = array.length - count; i <= len; i++) {
    const val = avg(array.slice(i, i + count));
    if (isNaN(val)) result.push(null);
    else result.push(val);
  }

  return result;
}
