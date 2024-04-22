import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../store/CartContext";
import emptyCart from "../img/empty_cart.png";

const ViewCart = () => {
  const { cart, removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleIncrease = (id) => {
    increaseAmount(id);
  };

  const handleDecrease = (id) => {
    decreaseAmount(id);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-7 mt-24">Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center">
          <img
            src={emptyCart}
            alt="Empty Cart"
            className="mx-auto mb-4"
            style={{ height: "20rem", width: "22rem" }}
          />
          <Link to="/" className="bg-red-500 text-white px-4 py-2 rounded-md">
            Add More Products
          </Link>
        </div>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="bg-gray-300 bg-opacity-40 text-gray-650 p-4 rounded-lg mb-4 flex items-center justify-between border-b-red-500"
          >
            <div className="flex items-center ">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-22 h-20 mr-4 rounded-md"
              />
              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-lg">Price: ${item.price}</p>
                <p className="text-lg">Quantity: {item.amount}</p>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-white text-red-500 px-3 py-1 rounded-lg mr-2"
              >
                Remove
              </button>
              <button
                onClick={() => handleIncrease(item.id)}
                className="bg-white text-red-500 px-3 py-1 rounded-lg mr-2"
              >
                +
              </button>
              <button
                onClick={() => handleDecrease(item.id)}
                className="bg-white text-red-500 px-3 py-1 rounded-lg"
              >
                -
              </button>
            </div>
          </div>
        ))
      )}
      {cart.length !== 0 ? (
        <div className="flex justify-center">
          <Link to={"/checkout"}>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
              Proceed to buy
            </button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default ViewCart;
