import React from "react";
import Home from "./Home";
import {BrowserRouter, Router, Routes} from "react-router-dom";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}