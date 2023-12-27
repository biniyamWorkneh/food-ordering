import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Service from "./Service";
import Payment from "./Payment";
import Footer from "./Footer";

const RoutePage = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/service/:serviceId" Component={Service} />
        <Route path="/service" Component={Service} />
        <Route path="/about" Component={About} />
        <Route path="/payment/:id" Component={Payment} />
        <Route path="/payment" Component={Payment} />
      </Routes>
      <Footer />
    </div>
  );
};

export default RoutePage;
