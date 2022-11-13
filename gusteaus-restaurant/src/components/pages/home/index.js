import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      Inicio
      <Link to="/menu">
        <button className="bg-sky-500 hover:bg-sky-700 ...">Ir al menú</button>
      </Link>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12" src="/images/GUSTEAUSLOGO.png" alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
    </>
  );
}
