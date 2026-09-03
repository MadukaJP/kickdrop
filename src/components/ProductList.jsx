import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Air Runner Low",
    price: "₦45,000",
  },
  {
    id: 2,
    name: "Street High Top",
    price: "₦52,000",
  },
];

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
