import React from "react";

const Cart = ({ items, onUpdateQuantity, onRemove }) => {
  const totalPrice = items.reduce(
    (sum, item) => sum + (item.quantity * item.price),
    0
  );


  if (items.length === 0) {
    return <p>The cart is empty</p>;
  }
  return (
    <div className="cart">
      {items.map((item) => (
        <div key={item.id} className="cart-row">
          <span>{item.name}</span>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => onUpdateQuantity(item.id, Number(e.target.value))}
          />
          <button onClick={() => onRemove(item.id)}>Remove</button>
        </div>
      ))}
      <p className="cart-total">Total: ${totalPrice.toFixed()}</p>
    </div>
  );
};

export default Cart;
