import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Header from "./components/Header";
import ProductDetails from "./pages/ProductDetails";
import { API_BASE } from "./api";
import Admin from "./pages/Admin";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  function handleAddToCart(product) {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
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
    setRecentlyViewed((prev) => {
      const withoutProduct = prev.filter((item) => item.id !== product.id);

      const newList = [product, ...withoutProduct];

      return newList.slice(0, 4);
    });
  }

  function updateQuantity(id, newQuantity) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  }

  function removeItem(id) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
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

        <Route
          path="/cart"
          element={<Cart items={cartItems} 
          onUpdateQuantity={updateQuantity}
          onRemove={removeItem}
          />}
        />

        <Route
          path="/admin"
          element={<Admin products={products} />}
        />


      </Routes>
    </div>
  );
}

export default App;
