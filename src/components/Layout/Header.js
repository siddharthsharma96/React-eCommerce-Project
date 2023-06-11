import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div className="logo">
        {/* Logo image or text */}
        <a href="#">LOGO</a>
      </div>
      <div className="search-bar">
        {/* Search bar component */}
        <input type="text" placeholder="Search for any product given below" />
        <button type="button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="cart">
        {/* Cart icon and value */}
        {/* <span className="cart-icon">&#128722;</span> */}
        <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
        <span className="cart-value">3</span>
      </div>
    </header>
  );
};

export default Header;
