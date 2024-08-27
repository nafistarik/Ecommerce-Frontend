import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import arrow_icon from "./../Assets/arrow.png";
import hero_image from "./../Assets/hero_image.png";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleDiscoverNowClick = () => {
    navigate("/womens"); // Navigate to /women route
  };

  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Fresh Collections for Everyone</h2>
        <div className="hero-description">
          <p>Explore the Newest Trends</p>
          {/* <div className="hero-hand-icon">
            <img src={arrow_icon} alt="Arrow Icon" />
          </div> */}
          <p></p>
          <p>with Our Latest Collection</p>
        </div>
        <button className="hero-latest-btn" onClick={handleDiscoverNowClick}>
          Discover Now
          <img src={arrow_icon} alt="Arrow Icon" className="btn-arrow" />
        </button>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
