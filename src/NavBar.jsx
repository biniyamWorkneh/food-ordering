import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "./App.css";
import im from "../public/images/logo2.jpg";

import { Link } from "react-router-dom";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav>
      <div className="logo">
        <img
          src={im}
          style={{ width: "5rem", height: "4rem", borderRadius: "2rem" }}
        />
      </div>
      <div
        style={{
          marginRight: "28rem",
          fontWeight: "bold",
          fontSize: "2rem",
          //position: "flex",
        }}
      >
        welcome
      </div>
      <ul className={showMenu ? "menu-active" : "menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/details">details</Link>
        </li>
        <li>
          <Link to="/orderus">Order</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/payment">Payment</Link>
        </li>
      </ul>
      <div className="menu-icon" onClick={handleClick}>
        {<AiOutlineMenu />}
      </div>
    </nav>
  );
};
