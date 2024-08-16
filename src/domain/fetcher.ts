import { BareFetcher } from "swr";

const API_URL = import.meta.env.PUBLIC_API_URL;

export const fetcher: BareFetcher = async (resource, init) => {
  console.log("fetcher", resource, init);
  const input = `${API_URL}${
    (resource as string).startsWith("/") ? "" : "/"
  }${resource}`;
  const res = await fetch(input, init);
  return await res.json();
};
