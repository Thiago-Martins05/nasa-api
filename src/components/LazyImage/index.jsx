import { useState } from "react";

const LazyImage = ({
  src,
  alt,
  className,
  fallbackSrc = "/images/placeholder.jpg",
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [imageStatus, setImageStatus] = useState("loading");

  const handleImageLoad = () => {
    setImageStatus("loaded");
  };

  const handleImageError = () => {
    setImageStatus("error");
    setImageSrc(fallbackSrc);
  };

  return (
    <div className={`relative ${className}`}>
      {imageStatus === "loading" && (
        <div className="absolute inset-0 bg-gray-700 animate-pulse rounded"></div>
      )}
      <img
        src={imageSrc}
        alt={alt}
        className={`${className} hover:scale-105 duration-200 ${
          imageStatus === "loading" ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading="lazy"
      />
    </div>
  );
};

export default LazyImage;
