import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../store/ProductContext";
import { CartContext } from "../store/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const products = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  const { title, price, description, images } = product;

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <div className="max-w-[400px] lg:max-w-sm flex justify-center items-center">
              <img
                className="max-w-full h-auto rounded-lg"
                src={images[selectedImageIndex]}
                alt=""
              />
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left lg:pl-8">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              $ {price}
            </div>
            <p className="mb-8 mr-4">{description}</p>
            <div className="flex justify-center lg:justify-start mb-4 space-x-2">
              {images.map((image, index) => (
                <img
                  key={index}
                  className="cursor-pointer max-w-[50px] rounded-lg transition duration-300 border border-transparent hover:border-primary"
                  src={image}
                  alt=""
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </div>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-primary py-4 px-8 text-white transition duration-300 hover:bg-red-500 rounded-md"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
