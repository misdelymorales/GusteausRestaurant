import React from "react";
import style from "./menuItem.style";

function Item() {
  return (
    <div className={style.contenedorItem.base}>
      <img
        className={style.contenedorItem.itemImagen}
        src="/images/Machas.jpg"
        alt="machas"
      />
      <div className={style.contenedorItem.textoItem}>
        <div>
          <p className={style.contenedorItem.tituloItem}>
          Plato continental: huevos, jamón y queso
          </p>
          <p className={style.contenedorItem.descripcionItem}>
            Queso parmesano, Vino blanco y Mantequilla (12 a 15 Uni.)
          </p>
          <p className={style.contenedorItem.precioItem}>$16.990</p>
        </div>
        <div className={style.contenedorItem.selectoresCantidad}>
          <div className="flex flex-row">
            <button className={style.contenedorItem.btnSelectores}>-</button>
            <p className="mr-2">1</p>
            <button className={style.contenedorItem.btnSelectores}>+</button>
          </div>
          <div>
            <button className={style.contenedorItem.btnAgregar}>Agregar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ItemComida() {
  return <Item />;
}
