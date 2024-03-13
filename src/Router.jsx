import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import details from "./details";
import Payment from "./Payment";
import Footer from "./Footer";
import Orderus from "./Orderus";
import AllDetails from "./AllDetails";
import Login from "./login";
import Register from "./register";
import Cart from "./Cart";
const RoutePage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/cart" Component={Cart} />
        <Route exact path="/home" Component={Home} />
        <Route path="/details" Component={AllDetails} />
        <Route path="/details/:id" Component={details} />
        <Route path="/orderus" Component={Orderus} />
        <Route path="/about" Component={About} />
        <Route path="/payment/:id" Component={Payment} />
        <Route path="/payment" Component={Payment} />
      </Routes>

      <Footer />
    </div>
  );
};

export default RoutePage;
