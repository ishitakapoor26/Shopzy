// Modal.js
import React from "react";
import { Link } from "react-router-dom";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>Please log in to add items to your cart.</p>
        <Link to="/login">Log in</Link>
      </div>
    </div>
  );
};

export default Modal;
