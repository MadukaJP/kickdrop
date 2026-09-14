import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  const [cartCount, setCartCount] = useState(0);

  function handleAddToCart() {
    setCartCount(cartCount + 1);
  }

  return (
    <div className="app">
      <Header cartCount={cartCount} />
      <ProductList onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
