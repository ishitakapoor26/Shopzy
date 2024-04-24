import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // State to store products
  const [products, setProducts] = useState([]);

  // Fetch products
  useEffect(() => {
    const categories = [
      "groceries",
      "home-decoration",
      "furniture",
      "lighting",
      "sunglasses",
      "womens-jewellery",
    ];

    const fetchProducts = async () => {
      try {
        const fetchedProducts = [];

        for (const category of categories) {
          const response = await fetch(
            `https://dummyjson.com/products/category/${category}`
          );
          const data = await response.json();
          fetchedProducts.push(...data.products);
        }

        setProducts(fetchedProducts);
        localStorage.setItem("products", JSON.stringify(fetchedProducts));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};
