import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../store/CartContext";
import emptyCart from "../img/empty_cart.png";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  // State variables
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [savedAddresses, setSavedAddresses] = useState(
    JSON.parse(localStorage.getItem("savedAddresses")) || []
  );
  const [selectedAddress, setSelectedAddress] = useState("");
  const [paymentOption, setPaymentOption] = useState("");

  // useEffect to update local storage when saved addresses change
  useEffect(() => {
    localStorage.setItem("savedAddresses", JSON.stringify(savedAddresses));
  }, [savedAddresses]);

  // Event handler for adding a new delivery address
  const handleAddAddress = () => {
    if (!deliveryAddress.trim()) {
      alert("Please enter a valid delivery address");
      return;
    }
    setSavedAddresses([
      ...savedAddresses,
      { id: Date.now(), address: deliveryAddress },
    ]);
    setDeliveryAddress("");
  };

  // Event handler for selecting an address from saved addresses
  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
  };

  // Event handler for selecting a payment option
  const handleSelectPaymentOption = (option) => {
    setPaymentOption(option);
  };

  // Event handler for submitting the checkout form
  const handleSubmitCheckout = () => {
    // Validate form fields
    if (!selectedAddress) {
      alert("Please select a delivery address");
      return;
    }
    if (!paymentOption) {
      alert("Please select a payment option");
      return;
    }

    // Submit checkout form data
    // Example:
    // submitCheckoutForm({ address: selectedAddress, paymentOption });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-7 mt-24">Checkout</h1>
      {cart.length !== 0 ? (
        <>
          {/* Delivery address section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Delivery Address</h2>
            <input
              type="text"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              placeholder="Enter delivery address"
              className="border border-gray-300 rounded-md px-3 py-2 w-full mb-3"
            />
            <button
              onClick={handleAddAddress}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Add Address
            </button>
          </div>
          {/* Select address section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Select Address</h2>
            <div className="flex flex-col space-y-2">
              {savedAddresses.map((address) => (
                <div key={address.id}>
                  <label>
                    <input
                      type="radio"
                      name="address"
                      value={address.id}
                      onChange={() => handleSelectAddress(address)}
                    />
                    {address.address}
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* Payment options section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Payment Options</h2>
            <div className="flex flex-col space-y-2">
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="credit_card"
                  onChange={() => handleSelectPaymentOption("credit_card")}
                />
                Credit Card
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  onChange={() => handleSelectPaymentOption("paypal")}
                />
                PayPal
              </label>
            </div>
          </div>
          {/* Checkout button */}
          <button
            onClick={handleSubmitCheckout}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Proceed to Checkout
          </button>
        </>
      ) : (
        <div className="text-center">
          <img
            src={emptyCart}
            alt="Empty Cart"
            className="mx-auto mb-4 w-32 h-32"
            style={{ height: "20rem", width: "22rem" }}
          />
          <Link to="/" className="bg-red-500 text-white px-4 py-2 rounded-md">
            Add More Products
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
