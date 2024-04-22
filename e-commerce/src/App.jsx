import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ViewCart from "./pages/ViewCart";

// import components

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="overflow-hiffen">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<ViewCart />} />
          </Routes>
          <Sidebar />
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
