import Header from "../components/Header";
import { useApi } from "../hooks/useApi";
import SubTitle from "../components/SubTitle";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import LazyImage from "../components/LazyImage";
import { fetchApodData } from "../services/apiApod";

const Apod = () => {
  const { data: photoData, loading, error, refetch } = useApi(fetchApodData);

  if (loading) {
    return (
      <>
        <Header>Astronomy Picture of the Day</Header>
        <LoadingSpinner message="Loading image of the day..." />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header>Astronomy Picture of the Day</Header>
        <ErrorMessage message={error} onRetry={refetch} />
      </>
    );
  }

  if (!photoData) return null;

  return (
    <>
      <Header>Astronomy Picture of the Day</Header>
      <SubTitle subTitle={photoData.title} date={photoData.date} />
      <main className="grid text-white py-3 grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-12 lg:gap-32 px-5 max-h-[50vh] w-4/5 m-auto">
        <div className="min-h-[300px]">
          {photoData.media_type === "image" ? (
            <LazyImage
              className="w-full h-full object-cover rounded-lg"
              src={photoData.url}
              alt={photoData.title}
            />
          ) : (
            <iframe
              className="w-full h-full rounded-lg"
              src={photoData.url}
              title={photoData.title}
              frameBorder="0"
              allowFullScreen
            />
          )}
        </div>
        <div className="w-full overflow-y-auto">
          <h3 className="text-sm sm:text-3xl mr-6 font-medium leading-relaxed">
            <span className="text-red-700">Explanation:</span>{" "}
            {photoData.explanation}
          </h3>
        </div>
      </main>
    </>
  );
};

export default Apod;
