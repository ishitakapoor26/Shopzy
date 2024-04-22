import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../store/CartContext";
import logo from "../img/logo.svg";
import { SidebarContext } from "../store/SidebarContext";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-transparent py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container flex mx-auto items-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <img className="w-12" src={logo} alt="Logo" />
          </div>
        </Link>
        <nav className="flex items-center space-x-20">
          <Link to={"/"} className="hover:text-gray-800 text-primary">
            Home
          </Link>
          <a
            href="#category-list"
            className="hover:text-gray-800 text-primary translate-x-2"
          >
            Categories
          </a>

          <Link to={"/contact"} className="hover:text-gray-800">
            Contact Us
          </Link>
        </nav>
        <div
          className="cursor-pointer flex relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
