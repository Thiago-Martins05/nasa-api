// APOD API service
import { API_CONFIG } from "../config/api";

export async function fetchApodData(url = null) {
  try {
    const apiUrl =
      url || `${API_CONFIG.APOD.url}?api_key=${API_CONFIG.APOD.params.api_key}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data) {
      throw new Error("Data not found");
    }

    return data;
  } catch (error) {
    console.error("APOD API Error:", error);
    throw new Error(`Failed to load image of the day: ${error.message}`);
  }
}
