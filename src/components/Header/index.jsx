import NavBar from "../NavBar";

const Header = ({ children }) => {
  return (
    <header className="bg-[#07083f] flex mx-auto w-full justify-between items-center text-white h-24 sm:h-36 px-6 sm:full">
      <img
        src="./images/logo-nasa.png"
        alt="photo of the Nasa"
        className="hover:scale-105 duration-200 hover:opacity-90 w-24 md:w-60"
      />

      <h1 className="font-bold text-4xl	hidden lg:flex">{children}</h1>
      <NavBar />
    </header>
  );
};

export default Header;
