// Data formatting utilities

export const formatDate = (dateString) => {
  if (!dateString) return "";

  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatSpeed = (speedKmh) => {
  if (!speedKmh) return "0 km/h";

  const speed = parseFloat(speedKmh);
  if (speed >= 1000) {
    return `${(speed / 1000).toFixed(1)} km/s`;
  }
  return `${speed.toFixed(2)} km/h`;
};

export const formatDiameter = (min, max) => {
  if (!min || !max) return "N/A";

  const minMeters = Math.round(min);
  const maxMeters = Math.round(max);

  if (maxMeters >= 1000) {
    return `${(minMeters / 1000).toFixed(1)} - ${(maxMeters / 1000).toFixed(
      1
    )} km`;
  }

  return `${minMeters} - ${maxMeters} m`;
};

export const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};

export const getRoverStatusColor = (status) => {
  switch (status?.toLowerCase()) {
    case "active":
      return "text-green-400";
    case "complete":
      return "text-blue-400";
    case "unknown":
      return "text-yellow-400";
    default:
      return "text-gray-400";
  }
};
