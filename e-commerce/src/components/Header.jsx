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
          <div className="relative">
            <button
              onMouseEnter={() => setIsCategoryOpen(true)}
              onMouseLeave={() => setIsCategoryOpen(false)}
              className="hover:text-gray-800"
            >
              Categories
            </button>
            {isCategoryOpen && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md mt-2">
                <ul className="py-2">
                  {/* Add your categories here */}
                  <li>
                    <Link
                      to={"/category1"}
                      className="block px-4 py-2 hover:bg-gray-100 text-primary"
                    >
                      Category 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/category2"}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Category 2
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
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
