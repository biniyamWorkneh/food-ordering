import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "./App.css";
import { Navbar } from "./Navbar";
import RoutePage from "./Router";
function App() {
  return (
    <>
      <RoutePage />
      <Navbar />
    </>
  );
}

export default App;
