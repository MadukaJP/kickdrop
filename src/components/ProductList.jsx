import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
