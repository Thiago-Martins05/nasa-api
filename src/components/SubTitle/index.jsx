const SubTitle = ({ subTitle, date, children }) => {
  return (
    <>
      <h2 className="font-medium text-center text-white py-3 text-sm sm:text-3xl mb-5 sm:mb-8 mt-4 sm:mt-12">
        <span className="text-red-700">{subTitle || children}:</span> {date}
      </h2>
    </>
  );
};

export default SubTitle;
