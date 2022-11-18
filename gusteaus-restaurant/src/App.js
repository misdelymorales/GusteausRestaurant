import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/pages/home";
import { Menu } from "./components/pages/menu";
import { doc, getFirestore } from "firebase/firestore";
import {
  FirestoreProvider,
  useFirestoreDocData,
  useFirestore,
  useFirebaseApp
} from "reactfire";

export default function App() {
  const firestoreInstance = getFirestore(useFirebaseApp());
  return (
    <>
      <FirestoreProvider sdk={firestoreInstance}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </FirestoreProvider>
    </>
  );
}
