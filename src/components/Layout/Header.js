import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Cart from "../Cart";

const Header = ({ cartItem, items, onHandleEvent }) => {
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
      <Cart
        cartItem={cartItem}
        items={items}
        onHandleEvent={onHandleEvent}
      ></Cart>
    </header>
  );
};

export default Header;
