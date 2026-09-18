import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Header from "./components/Header";
import ProductDetails from "./pages/ProductDetails";
import { API_BASE } from "./api";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  function handleAddToCart() {
    setCartCount(cartCount + 1);
  }

  async function fetchProducts() {
    try {
      const response = await fetch(`${API_BASE}/api/v1/products`);

      const data = await response.json();

      setProducts(data);
    } catch (error) {
      console.log("An error occured while fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  }

  function trackView(product) {
    const withoutProduct = recentlyViewed.filter((item) => item.id !== product.id);

    const newList = [product, ...withoutProduct, ];

    setRecentlyViewed(newList.slice(0, 4));
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="app">
      <Header cartCount={cartCount} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onAddToCart={handleAddToCart}
              products={products}
              isLoading={isLoading}
              recentlyViewed={recentlyViewed}
            />
          }
        />

        <Route
          path="/product/:id"
          element={<ProductDetails products={products} onView={trackView} />}
        />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
