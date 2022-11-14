import React from "react";
import style from "./menuResumen.style";

export function Resumen() {
  return (
    <div className={style.contenedorResumen.base}>
      <div>
        <h3>Total de Orden</h3>
        <div>
            <p>descripción</p>
        </div>
      </div>
    </div>
  );
}