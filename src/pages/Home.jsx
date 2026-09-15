import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";

const Home = ({ onAddToCart }) => {
  
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://6a93011925936d5660f087b5.mockapi.io/api/v1/products",
        );

        const data = await response.json();

        setProducts(data)
        
      } catch (error) {
        console.log("An error occured while fetching products:", error)
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts()
  }, []);

  
  if (isLoading)  {
    return <p className="loading">Loading sneakers...</p>
  }

  return <ProductList onAddToCart={onAddToCart} products={products} />;
};

export default Home;
