// Centralized NASA API configuration
const API_BASE_URL = "https://api.nasa.gov";
const API_KEY = import.meta.env.VITE_API_KEY;

export const API_CONFIG = {
  APOD: {
    url: `${API_BASE_URL}/planetary/apod`,
    params: { api_key: API_KEY },
  },
  NEO: {
    url: `${API_BASE_URL}/neo/rest/v1/feed`,
    params: { api_key: API_KEY },
  },
  ROVER: {
    url: `${API_BASE_URL}/mars-photos/api/v1/rovers/curiosity/photos`,
    params: { api_key: API_KEY },
  },
};

export const DEFAULT_DATES = {
  NEO_START: "2025-04-10",
  NEO_END: "2025-04-17",
  ROVER: "2025-04-10",
};

export const API_TIMEOUT = 10000; // 10 seconds
