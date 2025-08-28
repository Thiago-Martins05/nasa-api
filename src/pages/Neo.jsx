import Header from "../components/Header";
import { useState, useCallback } from "react";
import { Telescope, Ruler, Gauge } from "lucide-react";
import SubTitle from "../components/SubTitle";
import Input from "../components/Input";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import { useApi } from "../hooks/useApi";
import { fetchNeoData } from "../services/apiNeo";
import { DEFAULT_DATES } from "../config/api";

const Neo = () => {
  const [selectedDate, setSelectedDate] = useState(DEFAULT_DATES.NEO_START);

  const fetchNeoWithDate = useCallback(() => {
    return fetchNeoData(null, selectedDate, DEFAULT_DATES.NEO_END);
  }, [selectedDate]);

  const {
    data: neoResponse,
    loading,
    error,
    refetch,
  } = useApi(fetchNeoWithDate, [selectedDate]);

  const neoData = neoResponse?.near_earth_objects?.[selectedDate] || [];

  return (
    <>
      <Header>Near-Earth Asteroids</Header>
      <Input selectedDate={selectedDate} onDateChange={setSelectedDate} />

      <div className="flex flex-col gap-6 justify-center items-center text-white">
        <SubTitle date={selectedDate}>Near-Earth Objects in</SubTitle>

        {loading ? (
          <LoadingSpinner message="Loading asteroid data..." />
        ) : error ? (
          <ErrorMessage message={error} onRetry={refetch} />
        ) : neoData.length === 0 ? (
          <div className="text-center p-8">
            <p className="text-lg">No asteroids found for this date.</p>
          </div>
        ) : (
          <div className="h-96 overflow-auto border rounded-md p-5 bg-gray-800/50">
            <ul className="w-80 space-y-4">
              {neoData.map((obj) => (
                <li
                  className="w-full border-b border-gray-600 pb-4"
                  key={obj.id}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Telescope className="text-red-700" size={16} />
                      <span className="text-red-700 font-medium">Name:</span>
                      <span className="text-sm">{obj.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ruler className="text-red-700" size={16} />
                      <span className="text-red-700 font-medium">
                        Diameter (m):
                      </span>
                      <span className="text-sm">
                        {Math.round(
                          obj.estimated_diameter.meters.estimated_diameter_min
                        )}{" "}
                        -{" "}
                        {Math.round(
                          obj.estimated_diameter.meters.estimated_diameter_max
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gauge className="text-red-700" size={16} />
                      <span className="text-red-700 font-medium">Speed:</span>
                      <span className="text-sm">
                        {parseFloat(
                          obj.close_approach_data[0].relative_velocity
                            .kilometers_per_hour
                        ).toFixed(2)}{" "}
                        km/h
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Neo;
