/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../store/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  const { id, title, thumbnail, price, amount } = item;

  return (
    <div className="flex py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center">
        <Link to={`/product/${id}`} className="flex items-center w-max">
          <img className="max-w-[9rem] px-1 mr-3" src={thumbnail} alt="" />
        </Link>
        <div className="flex flex-col w-full">
          <div className="flex justify-between mb-2">
            <Link>
              <span className="text-sm uppercase font-medium text-primary hover:underline">
                {title}
              </span>
            </Link>
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-00 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px]  items-center h-full border text-primary font-medium">
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 flex justify-center items-center cursor-pointer"
              >
                <IoMdRemove />
              </div>
              <div className="h-full justify-center items-center px-3 py-1">
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 flex items-center h-full cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            <div className="flex flex-1 items-center justify-around">
              $ {price}
            </div>
            <div className="flex-1 flex justify-end items-center text-primary font-medium">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
