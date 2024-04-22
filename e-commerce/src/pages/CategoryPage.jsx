import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import Loader from "../components/Loader"; // Import the Loader component

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/category/${category}`
        );
        const data = await response.json();
        setProducts(data.products);
        setLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchProducts();
  }, [category]);

  // Display the loader while data is being fetched
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="pt-20">
      <h1 className="text-3xl font-semibold text-center mb-8 text-gray-800 text-primary mt-20">
        Products in {category}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-12 max-w-screen-xl mx-auto">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
