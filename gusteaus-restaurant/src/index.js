import React from "react";
// import { Component, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "./firebaseConfig";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
      <React.StrictMode>
        <BrowserRouter>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
          <App/>
        </FirebaseAppProvider>
        </BrowserRouter>
      </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
