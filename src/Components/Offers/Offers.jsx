import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import exclusive_image from "../Assets/exclusive_image.png";
import "./Offers.css";

const Offers = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCheckNowClick = () => {
    navigate("/womens"); // Navigate to /women route
    window.scrollTo(0, 0);
  };

  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive Offers </h1>
        <h1>For You</h1>
        <p>ON BEST SELLERS</p>
        <button onClick={handleCheckNowClick}>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="Exclusive_Image" />
      </div>
    </div>
  );
};

export default Offers;
