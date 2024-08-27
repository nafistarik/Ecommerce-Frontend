import React from "react";
import arrow_icon from "../Assets/breadcrum_arrow.png";
import "./Breadcrum.css";

const Breadcrum = ({ product }) => {
  return (
    <div className="breadcrum">
      <span>Home</span>
      <img src={arrow_icon} alt="Arrow" className="breadcrumb-arrow" />
      <span>Shop</span>
      <img src={arrow_icon} alt="Arrow" className="breadcrumb-arrow" />
      <span>{product.category}</span>
      <img src={arrow_icon} alt="Arrow" className="breadcrumb-arrow" />
      <span>{product.name}</span>
    </div>
  );
};

export default Breadcrum;
