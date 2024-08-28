import React, { useContext } from "react";
import { ShopContext } from "../../Context/Context";
import star_dull_icon from "../Assets/star_dull_icon.png";
import star_icon from "../Assets/star_icon.png";
import "./ProductDisplay.css";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-thumbnail-list">
          <img src={product.image} alt="Thumbnail" />
          <img src={product.image} alt="Thumbnail" />
          <img src={product.image} alt="Thumbnail" />
          <img src={product.image} alt="Thumbnail" />
        </div>
        <div className="product-display-main-image">
          <img src={product.image} alt={product.name} />
        </div>
      </div>
      <div className="product-display-right">
        <h1 className="product-title">{product.name}</h1>
        <div className="product-rating">
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_dull_icon} alt="star dull" />
          <p className="review-count">(122 Reviews)</p>
        </div>
        <div className="product-prices">
          <span className="old-price">${product.old_price}</span>
          <span className="new-price">${product.new_price}</span>
        </div>
        <p className="product-description">
          Make a statement with the Elegant Enigma Dress and enjoy a blend of
          classic style and contemporary elegance. Perfect for those who
          appreciate timeless fashion with a modern twist.
        </p>
        <div className="product-sizes">
          <h2>Select Size</h2>
          <div className="sizes-list">
            <div className="size-option">S</div>
            <div className="size-option">M</div>
            <div className="size-option">L</div>
            <div className="size-option">XL</div>
            <div className="size-option">XXL</div>
          </div>
        </div>
        <button
          className="add-to-cart-btn"
          onClick={() => addToCart(product.id)}
        >
          Add to Cart
        </button>
        <p className="product-category">
          <strong>Category: </strong>Women, T-shirt, Crop-Top
        </p>
        <p className="product-tags">
          <strong>Tags: </strong>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
