import { useEffect, useState } from "react";

// REVIEW: No error state is exposed — callers cannot distinguish between "loading", "success", and "error". Add an `error` state and return it.
// REVIEW: No AbortController — if `url` changes before the previous fetch completes, the old request can resolve and overwrite `data` with stale results. Add cleanup with `controller.abort()`.
function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error("Failed to fetch", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, isLoading };
}

export { useFetch };
