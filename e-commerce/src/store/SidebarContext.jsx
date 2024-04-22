import React, { useState, createContext, useEffect } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  // Retrieve the initial state from local storage or set it to false if not found
  const [isOpen, setIsOpen] = useState(
    JSON.parse(localStorage.getItem("sidebarIsOpen")) || false
  );

  // Update local storage whenever the isOpen state changes
  useEffect(() => {
    localStorage.setItem("sidebarIsOpen", JSON.stringify(isOpen));
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};
