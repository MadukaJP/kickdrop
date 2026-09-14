import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <Link to="/" className="logo">KickDrop</Link>
      <Link to="/cart" >
        Cart (<span className="cart-badge">{cartCount}</span>)
      </Link>
    </header>
  );
};

export default Header;
