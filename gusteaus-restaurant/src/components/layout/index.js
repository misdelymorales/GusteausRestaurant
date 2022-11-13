import React from "react";
import './layout.css';



export function Layout({ children, withMenu }) {
  return(
    <div className="bg-red-900">
      <nav className="topNavigation">
        <div className="navigationLeft">R</div>
        <div className="navigationRight">L</div>
      </nav>
      <div className="layoutMain">{children}</div>
    </div>
  );
}
