import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import SubTitle from "../components/SubTitle";
import { fetchApodData } from "../services/apiApod";

const Apod = () => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${
    import.meta.env.VITE_API_KEY
  }`;
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchApodData(url);
      setPhotoData(data);
      console.log(data);
    };
    fetchData();
  }, []);
  // verificar se existe dados dentro de photodata
  if (!photoData) return <div />;

  return (
    <>
      <Header>Astronomy Picture of the Day</Header>
      <SubTitle subTitle={photoData.title} date={photoData.date} />
      <main className="grid text-white py-3 grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-12 lg:gap-32 px-5 max-h-[50vh] w-4/5 m-auto">
        <div className="">
          {photoData.media_type === "image" ? (
            <img
              className="w-full h-full"
              src={photoData.url}
              alt={photoData.title}
            />
          ) : (
            <iframe
              className="w-full h-full"
              src={photoData.url}
              frameborder="0"
            ></iframe>
          )}
        </div>
        <div className="w-full overflow-y-auto ">
          <h3 className="text-sm sm:text-3xl mr-6 font-medium ">
            <span className="text-red-700">Explanation:</span>{" "}
            {photoData.explanation}
          </h3>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Apod;
