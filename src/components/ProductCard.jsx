import React from "react";

const ProductCard = ({ name, price, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image-placeholder" />
      <p className="product-name">{name}</p>
      <p className="product-price">{price}</p>
      <button onClick={onAddToCart}>Add to cart</button>
    </div>
  );
};

export default ProductCard;
