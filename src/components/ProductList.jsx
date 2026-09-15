import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ onAddToCart, products }) => {
  return (
    <div className="product-list">
      {products.map((sneaker) => (
        <ProductCard
          key={sneaker.id}
          id={sneaker.id}
          name={sneaker.name}
          price={sneaker.price}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
