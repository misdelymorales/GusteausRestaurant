import React, {useContext} from "react";
import { MenuContext } from "../../context/menuContext";
import style from "./menuResumen.style";

export function Resumen() {
  const {total} = useContext(MenuContext)
  return (
    <div className={style.contenedorResumen.base}>
      <div>
        <h3>Total de Orden</h3>
        <div>
            <p>descripción</p>
            <p>{total}</p>
        </div>
      </div>
    </div>
  );
}