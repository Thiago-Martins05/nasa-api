import { AlertCircle, RefreshCw } from "lucide-react";

const ErrorMessage = ({ message, onRetry, showRetry = true }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <AlertCircle className="text-red-500 mb-4" size={48} />
      <p className="text-white text-lg mb-4">{message}</p>
      {showRetry && onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center gap-2 px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded-md transition-colors duration-200"
        >
          <RefreshCw size={20} />
          Try again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
