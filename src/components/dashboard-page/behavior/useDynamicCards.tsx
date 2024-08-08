import { InfoData } from "@/domain/dashboard/types";
import { useEffect, useState } from "react";

const API_URL = import.meta.env.PUBLIC_API_URL;

export const useDynamicCards = () => {
  const [infoData, setInfoData] = useState<InfoData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/api/info`)
      .then((response) => response.json())
      .then((data) => setInfoData(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return { infoData, loading };
};
