import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/pages/home";
import { Menu } from "./components/pages/menu";
import { Routes, Route } from "react-router-dom";
import db from "./firebase/firebase";

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
