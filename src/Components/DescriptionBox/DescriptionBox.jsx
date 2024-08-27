import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Elevate your wardrobe with the Elegant Enigma Dress, a timeless piece
          that seamlessly blends classic sophistication with modern flair.
          Crafted from luxurious, breathable fabric, this dress offers a
          flattering silhouette that enhances your natural shape while providing
          exceptional comfort. Featuring a high neckline with delicate lace
          detailing and a fitted bodice, the Elegant Enigma Dress exudes refined
          elegance. The A-line skirt gracefully flows to a knee-length hem,
          creating a graceful movement with every step. The soft, rich color
          options add a touch of versatility, making it perfect for both formal
          events and casual outings.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
