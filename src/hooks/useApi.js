import { useState, useEffect, useCallback } from "react";
import { API_TIMEOUT } from "../config/api";

export const useApi = (fetchFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // Create timeout for request
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Request timeout")), API_TIMEOUT);
      });

      const dataPromise = fetchFunction();
      const result = await Promise.race([dataPromise, timeoutPromise]);

      setData(result);
    } catch (err) {
      console.error("API Error:", err);
      setError(err.message || "Error loading data");
    } finally {
      setLoading(false);
    }
  }, [fetchFunction]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchData, ...dependencies]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch };
};
