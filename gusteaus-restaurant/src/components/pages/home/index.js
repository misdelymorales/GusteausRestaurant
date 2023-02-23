import React from "react";
import { Link } from "react-router-dom";
import style from "./index.style"

export function Home() {
  return (
    <div className="divide-y divide-slate-100 bg-[url('/public/images/login.png]')">
      <div>
      <Link to="/menu">
        <button className={style.pageLogin.buttonIniciarPedido}>Ir al menú</button>
      </Link>
      </div>
      
    </div>
  );
}
