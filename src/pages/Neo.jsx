import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { Telescope } from "lucide-react";
import { Ruler } from "lucide-react";
import { Gauge } from "lucide-react";
import SubTitle from "../components/SubTitle";
import Input from "../components/Input";
import { fetchNeoData } from "../services/apiNeo";

const Neo = () => {
  const DEFAULT_DATE = "2025-04-10";
  const DEFAULT_DATE_LIMIT = "2025-04-17";

  const [selectedDate, setSelectedDate] = useState(DEFAULT_DATE);
  const [neoData, setNeoData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNeo = async (date) => {
    setLoading(true);
    try {
      const data = await fetchNeoData(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${DEFAULT_DATE_LIMIT}&api_key=${
          import.meta.env.VITE_API_KEY
        }
  `
      );
      const dateData = data.near_earth_objects[date] || [];
      setNeoData(dateData);
      console.log(data);
    } catch (err) {
      console.error("Erro ao buscar dados da Api Neo da Nasa:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNeo(selectedDate);
  }, [selectedDate]);

  return (
    <>
      <Header>Near-Earth Asteroids</Header>
      <Input selectedDate={selectedDate} onDateChange={setSelectedDate} />

      <div className="flex flex-col gap-6 justify-center items-center text-white flex">
        <SubTitle date={selectedDate}>Near-Earth Objects in</SubTitle>

        {loading ? (
          <p>Loading data...</p>
        ) : (
          <div className="h-96 overflow-auto border rounded-md p-5">
            <ul className="w-80 ">
              {neoData.map((obj) => (
                <li className="w-full border-b mb-5" key={obj.id}>
                  <span className="">
                    {" "}
                    <span className="text-red-700">
                      <Telescope /> Name:
                    </span>{" "}
                    {obj.name}
                  </span>{" "}
                  <span className="text-red-700">
                    <Ruler /> Estimated diameter (m) :
                  </span>{" "}
                  {Math.round(
                    obj.estimated_diameter.meters.estimated_diameter_min
                  )}
                  -{" "}
                  {Math.round(
                    obj.estimated_diameter.meters.estimated_diameter_max
                  )}{" "}
                  <span className="text-red-700">
                    {" "}
                    <Gauge /> Speed:
                  </span>{" "}
                  {parseFloat(
                    obj.close_approach_data[0].relative_velocity
                      .kilometers_per_hour
                  ).toFixed(2)}{" "}
                  Km/h
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Neo;
