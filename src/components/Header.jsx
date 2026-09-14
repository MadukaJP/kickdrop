import React from "react";

const Header = ({ cartCount }) => {
  return (
      <header className="header">
      <span className="logo">KickDrop</span>
      <span className="cart-badge">{cartCount}</span>
    </header>
  );
};

export default Header;
