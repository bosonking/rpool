import { HashRateChartData } from "@/domain/chart";

const API_URL = import.meta.env.PUBLIC_API_URL;

type RawChartData = {
  label: string;
  data: number;
};

export const fetchChart = async (
  address?: string
): Promise<HashRateChartData[]> => {
  const url = address
    ? `${API_URL}/api/client/${address}/chart`
    : `${API_URL}/api/info/chart`;

  const res = await fetch(url);
  const data: RawChartData[] = await res.json();

  return data.map(({ label, data }) => ({
    dateTime: label,
    hashRate: data,
  }));
};
