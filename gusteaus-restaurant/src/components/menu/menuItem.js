
import React, { useContext } from "react";
import { useState } from "react";
import { MenuContext } from "../../context/menuContext";
import style from "./menuItem.style";

export function ItemComida() {
  return <Item />;
}

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
          <SelectorCantidad />
          <div>
            <button className={style.contenedorItem.btnAgregar}>Agregar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SelectorCantidad() {
  const { setSeleccion } = useContext(MenuContext);
  const [numClicks, setNumClicks] = useState(1);

  const restarItem = () => {
    if (numClicks > 0) setNumClicks(numClicks - 1);
  };

  const sumarItem = () => {
    setSeleccion({
      name: "plato continental: huevos, jamón y queso",
      description: "Plato continental con quesos, jamones y huevos",
      type: "desayuno",
      price: 4990,
      category: "salado",
    });
    setNumClicks(numClicks + 1);
  };

  return (
    <>
      <div className="flex flex-row">
        <BotonSelector texto="-" manejarClick={restarItem} />
        <Contador numClicks={numClicks} />
        <BotonSelector texto="+" manejarClick={sumarItem} />
      </div>
    </>
  );
}

function BotonSelector({ texto, manejarClick }) {
  return (
    <button
      className={style.contenedorItem.btnSelectores}
      onClick={manejarClick}
    >
      {texto}
    </button>
  );
}

function Contador({ numClicks }) {
  return <div className="mr-2">{numClicks}</div>;
}
//{} </> h g H G
