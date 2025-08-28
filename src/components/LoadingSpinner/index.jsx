const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-700 mb-4"></div>
      <p className="text-white text-lg">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
