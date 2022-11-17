import React, { Component, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/pages/home";
import { Menu } from "./components/pages/menu";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  );
}

export default App;
