import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../store/SidebarContext";
import { CartContext } from "../store/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max w-[30vw] transition-all duration-700 z-20 lg:px-[35px] overflow-y-hidden flex flex-col`}
    >
      <div className="flex items-center justify-between border-b py-4 px-6">
        <div className="uppercase text-sm font-semibold">
          {" "}
          Shopping Bag({itemAmount}){" "}
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <div className="flex flex-col justify-between py-4 px-6">
        <div>
          <div className="uppercase font-semibold">
            <span>Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer bg-red-500 text-white rounded-full p-2 mb-3 mt-4 flex justify-center items-center"
          >
            <FiTrash2 className="text-xl" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Link
            to={"/cart"}
            className="bg-gray-200 text-primary font-medium rounded-full py-2 text-center"
          >
            View Cart
          </Link>
          <Link
            to={"/checkout"}
            className="bg-primary text-white font-medium rounded-full py-2 text-center"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
