<<<<<<< HEAD
// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import im from "../public/images/logo2.jpg";
import UserProfile from "./UserContext";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("bini", isLoggedIn);

  useEffect(() => {
    // Check if user is logged in by checking local storage
    const userData = localStorage.getItem("userData");
    setIsLoggedIn(!!userData);
  }, []);
=======
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "./App.css";
import im from "../public/images/logo2.jpg";

import { Link } from "react-router-dom";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a

  const handleClick = () => {
    setShowMenu(!showMenu);
  };
<<<<<<< HEAD

=======
>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a
  return (
    <nav>
      <div className="logo">
        <img
          src={im}
          style={{ width: "5rem", height: "4rem", borderRadius: "2rem" }}
<<<<<<< HEAD
          alt="logo"
        />
      </div>
      <div
        style={{ marginRight: "28rem", fontWeight: "bold", fontSize: "2rem" }}
=======
        />
      </div>
      <div
        style={{
          marginRight: "28rem",
          fontWeight: "bold",
          fontSize: "2rem",
          //position: "flex",
        }}
>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a
      >
        welcome
      </div>
      <ul className={showMenu ? "menu-active" : "menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
<<<<<<< HEAD
          <Link to="/details">detail</Link>
=======
          <Link to="/details">details</Link>
>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a
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
<<<<<<< HEAD
          <Link to="/payment">Pay</Link>
        </li>
      </ul>
      <div className="menu-icon" onClick={handleClick}>
        <AiOutlineMenu />
      </div>
      {isLoggedIn && <UserProfile />}
    </nav>
  );
};

export default Navbar;
=======
          <Link to="/payment">Payment</Link>
        </li>
      </ul>
      <div className="menu-icon" onClick={handleClick}>
        {<AiOutlineMenu />}
      </div>
    </nav>
  );
};
>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a
