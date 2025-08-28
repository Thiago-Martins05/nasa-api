import { Link } from "react-router-dom";
import { clsx } from "clsx";

function cn(...classes) {
  return clsx(classes);
}

const NavBar = () => {
  const classNavBar = cn(
    "hover:scale-105",
    "duration-200",
    "cursor-pointer",
    "hover:opacity-90"
  );
  return (
    <nav className="flex gap-3 text-xs md:text-lg font-semibold">
      <span>|</span>
      <Link className={classNavBar} to="/">
        Photo of the day
      </Link>
      <span>|</span>
      <Link className={classNavBar} to="/neo">
        Nearby asteroids
      </Link>
      <span>|</span>
      <Link className={classNavBar} to="/rover">
        Photo of Mars
      </Link>
      <span>|</span>
    </nav>
  );
};

export default NavBar;
