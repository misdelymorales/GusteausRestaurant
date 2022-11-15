import React, { useState } from "react";

export const MenuContext = React.createContext({
  seleccion: [],
  setSeleccion: () => {},
  total: 0,
});

export const MenuProvider = (props) => {
  const [seleccion, setSeleccion] = useState([]);
  const [total, setTotal] = useState(0);

  const setMenuSeleccion = (nuevoItem) => {
    const nuevaSeleccion = [nuevoItem, ...seleccion];
    setSeleccion(nuevaSeleccion);
    const newTotal = nuevaSeleccion.reduce(
      (acum, actual) => acum + actual.price,
      0
    );
    console.log(newTotal);
    setTotal(newTotal);
  };

  const values = {
    seleccion,
    total,
    setSeleccion: setMenuSeleccion,
  };

  return <MenuContext.Provider value={values} {...props} />;
};
