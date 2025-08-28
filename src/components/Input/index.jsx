const Input = ({ selectedDate, onDateChange }) => {
  return (
    <>
      <div className="
      flex
       justify-center
        items-center m-auto gap-5 text-lg mt-3 bg-transparent color-red text-[#B91C1C]">
        <label className="text-[#B91C1C]" htmlFor="date-input">
          Select a Earth date:
        </label>
        <input
          className="p-1"
          id="date-input"
          type="date"
          value={selectedDate}
          onChange={(e) => onDateChange(e.target.value)}
        />
      </div>
    </>
  );
};

export default Input;
