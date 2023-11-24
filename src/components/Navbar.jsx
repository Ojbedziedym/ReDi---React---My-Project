import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import CustomLink from "./CustomLink";
import { Route, Link, Routes } from "react-router-dom";

let Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const content = (
    <div>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-blue-300 transition">
        <ul className="text-center text-xl p-20">
          <CustomLink to="Home">Home</CustomLink>
          <CustomLink>About</CustomLink>
          <CustomLink to="FunnyFactsAboutSpiders">Funny facts</CustomLink>
          <CustomLink to="MyBelovedSpidersList">Spiders list</CustomLink>
          <CustomLink to="MyCats">My cats</CustomLink>
          <CustomLink to="CatsApi">CatsApi</CustomLink>
        </ul>
      </div>
    </div>
  );
  return (
    <nav className={`w-full bg-transparent sticky ${visible ? "top-0" : ""} `}>
      <div className="navbar h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-sky-400">
        <div className="flex items-center flex-1">
          <Link to="/spider">
            <span className="text-3xl font-bold text-sky-400">Adam Doniak</span>
          </Link>
        </div>
        <Routes>
          <Route path="/Spider" element={<Spider />} />
        </Routes>
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <CustomLink to="Home">Home</CustomLink>
              <CustomLink to="About">About</CustomLink>
              <CustomLink to="FunnyFactsAboutSpiders">Funny facts</CustomLink>
              <CustomLink to="MyBelovedSpidersList">Spiders list</CustomLink>
              <CustomLink to="MyCats">My cats</CustomLink>
              <CustomLink to="CatsApi">CatsApi</CustomLink>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
  function Spider() {
    window.location.replace("https://thespidershop.co.uk/");

    return null;
  }
};

export default Navbar;
