import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Men from "./Men";
import PrivateRoute from "./PrivateRoute";
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<h1>cart</h1>} />
      <Route path="/products" element={<Men />} />
    </Routes>
  );
};

export default Allroutes;
