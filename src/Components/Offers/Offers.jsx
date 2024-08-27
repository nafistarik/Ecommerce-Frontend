import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";
import "./Offers.css";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive Offers </h1>
        <h1>For You</h1>
        <p>ON BEST SELLERS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="Exclusive_Image" />
      </div>
    </div>
  );
};

export default Offers;
