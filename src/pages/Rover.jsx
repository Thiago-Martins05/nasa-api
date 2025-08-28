import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import SubTitle from "../components/SubTitle";
import Input from "../components/Input";
import { fetchRoverData } from "../services/apiRover";

const DEFAULT_DATE = "2025-04-10";

const Rover = () => {
  const [selectedDate, setSelectedDate] = useState(DEFAULT_DATE);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPhotosMars = async (date) => {
    setLoading(true);
    try {
      const data = await fetchRoverData(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setPhotos(data.photos);
      console.log(data);
    } catch (err) {
      console.log("Erro ao buscar fotos da Api Rover:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotosMars(selectedDate);
  }, [selectedDate]);

  return (
    <>
      <Header>Photo of Mars</Header>

      <div>
        <Input selectedDate={selectedDate} onDateChange={setSelectedDate} />
        <SubTitle date={selectedDate}>Photos from the Curiosity Rover</SubTitle>

        {loading ? (
          <p className="text-center">Loading photos...</p>
        ) : photos.length === 0 ? (
          <p className="text-center">No photos found for this date.</p>
        ) : (
          <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-* w-4/5 m-auto gap-5 overflow-y-auto mb-6">
            {photos.map((photo) => (
              <div key={photo.id} className="flex flex-col 2xl:flex-row gap-5">
                <img
                  src={photo.img_src}
                  alt={`Mars - ${photo.camera.full_name}`}
                  className="w-72 h-72"
                />
                <div className="w-52">
                  <p>
                    <span className="text-red-700">Cam: </span>
                    {photo.camera.full_name}
                  </p>
                  <p>
                    <span className="text-red-700">Rover: </span>
                    {photo.rover.name}
                  </p>
                  <p>
                    <span className="text-red-700">Status: </span>
                    {photo.rover.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Rover;
