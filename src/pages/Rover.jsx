import Header from "../components/Header";
import { useState, useCallback } from "react";
import SubTitle from "../components/SubTitle";
import Input from "../components/Input";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import LazyImage from "../components/LazyImage";
import { useApi } from "../hooks/useApi";
import { fetchRoverData } from "../services/apiRover";
import { DEFAULT_DATES } from "../config/api";

const Rover = () => {
  const [selectedDate, setSelectedDate] = useState(DEFAULT_DATES.ROVER);

  const fetchRoverWithDate = useCallback(() => {
    return fetchRoverData(null, selectedDate);
  }, [selectedDate]);

  const {
    data: roverResponse,
    loading,
    error,
    refetch,
  } = useApi(fetchRoverWithDate, [selectedDate]);

  const photos = roverResponse?.photos || [];

  return (
    <>
      <Header>Photo of Mars</Header>

      <div>
        <Input selectedDate={selectedDate} onDateChange={setSelectedDate} />
        <SubTitle date={selectedDate}>Photos from the Curiosity Rover</SubTitle>

        {loading ? (
          <LoadingSpinner message="Loading Mars photos..." />
        ) : error ? (
          <ErrorMessage message={error} onRetry={refetch} />
        ) : photos.length === 0 ? (
          <div className="text-center p-8">
            <p className="text-lg">No photos found for this date.</p>
          </div>
        ) : (
          <div className="grid justify-center items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 m-auto gap-8 mb-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="flex flex-col gap-4 bg-gray-800/30 p-4 rounded-lg"
              >
                <LazyImage
                  src={photo.img_src}
                  alt={`Mars - ${photo.camera.full_name}`}
                  className="w-full h-72 object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="text-red-700 font-medium">Camera: </span>
                    {photo.camera.full_name}
                  </p>
                  <p className="text-sm">
                    <span className="text-red-700 font-medium">Rover: </span>
                    {photo.rover.name}
                  </p>
                  <p className="text-sm">
                    <span className="text-red-700 font-medium">Status: </span>
                    <span
                      className={`${
                        photo.rover.status === "active"
                          ? "text-green-400"
                          : "text-yellow-400"
                      }`}
                    >
                      {photo.rover.status}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Rover;
