import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import details from "./details";
import Payment from "./Payment";
import Footer from "./Footer";
import Orderus from "./Orderus";
const RoutePage = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/details/:detailsId" Component={details} />
        <Route path="/details" Component={details} />
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
