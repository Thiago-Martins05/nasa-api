import { useState } from "react";
import { Calendar } from "lucide-react";

const Input = ({
  selectedDate,
  onDateChange,
  maxDate = null,
  minDate = null,
}) => {
  const [isValid, setIsValid] = useState(true);

  const handleDateChange = (e) => {
    const newDate = e.target.value;

    // Date validation
    if (maxDate && newDate > maxDate) {
      setIsValid(false);
      return;
    }

    if (minDate && newDate < minDate) {
      setIsValid(false);
      return;
    }

    setIsValid(true);
    onDateChange(newDate);
  };

  return (
    <div className="flex justify-center items-center m-auto gap-5 text-lg mt-3">
      <label
        className="text-[#B91C1C] font-medium flex items-center gap-2"
        htmlFor="date-input"
      >
        <Calendar size={20} />
        Select a date:
      </label>
      <div className="relative">
        <input
          className={`p-2 rounded border transition-colors duration-200 ${
            isValid
              ? "border-gray-600 focus:border-red-500"
              : "border-red-500 focus:border-red-600"
          }`}
          id="date-input"
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          max={maxDate}
          min={minDate}
        />
        {!isValid && (
          <span className="absolute -bottom-6 left-0 text-red-500 text-xs">
            Invalid date
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
