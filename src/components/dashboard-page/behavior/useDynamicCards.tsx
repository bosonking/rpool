import { HashRateChartData } from "@/domain/chart";
import { PoolData } from "@/domain/dashboard";
import { useEffect, useState } from "react";

const API_URL = import.meta.env.PUBLIC_API_URL;

type RawChartData = {
  label: string;
  data: number;
};

export const useDynamicCards = () => {
  const [infoData, setInfoData] = useState<PoolData | null>(null);
  const [hashRateChartData, setHashRateChartData] = useState<
    HashRateChartData[]
  >([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    Promise.all([
      fetch(`${API_URL}/api/info`)
        .then((response) => response.json())
        .then((data) => setInfoData(data)),
      fetch(`${API_URL}/api/info/chart`)
        .then((response) => response.json())
        .then((data: RawChartData[]) =>
          setHashRateChartData(
            data.map(({ label, data }) => ({
              dateTime: label,
              hashRate: data,
            }))
          )
        ),
    ])
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { infoData, hashRateChartData, refetch: fetchData, loading };
};
