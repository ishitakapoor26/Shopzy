import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // State to store products
  const [products, setProducts] = useState([]);

  // Fetch products
  useEffect(() => {
    // Check if products exist in local storage
    const storedProducts = JSON.parse(localStorage.getItem("products"));
    if (storedProducts) {
      setProducts(storedProducts);
    } else {
      // If products don't exist in local storage, fetch them
      const fetchProducts = async () => {
        try {
          const response = await fetch("https://dummyjson.com/products");
          const data = await response.json();
          // Assuming data is an array of products
          setProducts(data.products);
          localStorage.setItem("products", JSON.stringify(data.products));
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
      fetchProducts();
    }
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};
