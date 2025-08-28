import { Link } from "react-router-dom";
import { Home, AlertTriangle } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="flex h-screen justify-center items-center text-white">
      <div className="text-center space-y-6">
        <AlertTriangle className="mx-auto text-red-500" size={64} />
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold">Page not found</h2>
        <p className="text-gray-300 max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-red-700 hover:bg-red-800 text-white rounded-lg transition-colors duration-200"
        >
          <Home size={20} />
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
