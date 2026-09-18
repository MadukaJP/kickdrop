
function RecentlyViewed({ items }) {

  return (
    <div className="recently-viewed">
      <h3>Recently viewed</h3>
      <div className="recently-viewed-list">
          {items.map((item) => (
            <span key={item.id}>{item.name}</span>
          ))}
      </div>
    </div>
  );
}

export default RecentlyViewed;