// NEO API service
import { API_CONFIG, DEFAULT_DATES } from "../config/api";

export async function fetchNeoData(
  url = null,
  startDate = DEFAULT_DATES.NEO_START,
  endDate = DEFAULT_DATES.NEO_END
) {
  try {
    const apiUrl =
      url ||
      `${API_CONFIG.NEO.url}?start_date=${startDate}&end_date=${endDate}&api_key=${API_CONFIG.NEO.params.api_key}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data || !data.near_earth_objects) {
      throw new Error("Asteroid data not found");
    }

    return data;
  } catch (error) {
    console.error("NEO API Error:", error);
    throw new Error(`Failed to load asteroid data: ${error.message}`);
  }
} 