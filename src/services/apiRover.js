// Rover API service
import { API_CONFIG, DEFAULT_DATES } from "../config/api";

export async function fetchRoverData(url = null, date = DEFAULT_DATES.ROVER) {
  try {
    const apiUrl =
      url ||
      `${API_CONFIG.ROVER.url}?earth_date=${date}&api_key=${API_CONFIG.ROVER.params.api_key}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data || !data.photos) {
      throw new Error("Rover photos not found");
    }

    return data;
  } catch (error) {
    console.error("Rover API Error:", error);
    throw new Error(`Failed to load rover photos: ${error.message}`);
  }
} 