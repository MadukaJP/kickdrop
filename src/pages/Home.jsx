import ProductList from "../components/ProductList";
import RecentlyViewed from "../components/RecentlyViewed";

const Home = ({ onAddToCart, products, isLoading, recentlyViewed }) => {
  if (isLoading) {
    return <p className="loading">Loading sneakers...</p>;
  }

  return (
    <>
      <ProductList onAddToCart={onAddToCart} products={products} />
      <RecentlyViewed items={recentlyViewed} />
    </>
  );
};

export default Home;
