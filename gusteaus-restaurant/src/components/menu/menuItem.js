import React from "react";
import style from "./menuItem.style";

function Item() {
  return (
    <div className={style.contenedorItem}>
      <img className={style.itemImagen} src="/images/Machas.jpg" alt="machas" />
      <div className={style.textoItem}>
        <div className="pr-2">
          <p className={style.tituloItem}>Machas a la parmesana</p>
          <p className={style.descripcionItem}>
            Queso parmesano, Vino blanco y Mantequilla (12 a 15 Uni.)
          </p>
          <p className={style.precioItem}>$16.990</p>
        </div>
        <div className={style.selectoresCantidad}>
          <button className={style.btnSelectores}>-</button>
          <p>1</p>
          <button className={style.btnSelectores}>+</button>
          <div>
            <button className={style.btnAgregar}>Agregar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ItemComida() {
  return <Item />;
}
