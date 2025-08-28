import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#07083f] flex mx-auto w-full justify-around items-center text-white h-16 px-6 fixed bottom-0 left-0">
      <span className="text-sm sm:text-lg font-medium hover:scale-105 duration-200 hover:opacity-90">
        Developed by Thiago Martins
      </span>
      <div className="flex gap-6">
        <a
          className="hover:scale-105 duration-200 cursor-pointer hover:opacity-90"
          href="https://github.com/Thiago-Martins05"
          target="_blank"
        >
          <Github size={36} />
        </a>
        <a
          className="hover:scale-105 duration-200 cursor-pointer hover:opacity-90"
          href="https://linkedin.com/"
          target="_blank"
        >
          <Linkedin size={36} />
        </a>
        <a
          className="hover:scale-105 duration-200 cursor-pointer hover:opacity-90 hidden sm:flex"
          href="https://instagram.com/"
          target="_blank"
        >
          <Instagram size={36} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
