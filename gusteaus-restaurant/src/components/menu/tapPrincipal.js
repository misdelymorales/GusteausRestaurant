import React, { useState } from "react";
import style from "./tapPrincipal.style"
import {
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
} from "@heroicons/react/24/solid";
import { Transition } from "@headlessui/react";

const mesas = [
  {
    id: 1,
    nombre: "01",
  },
  {
    id: 2,
    nombre: "02",
  },
  {
    id: 3,
    nombre: "03",
  },
  {
    id: 4,
    nombre: "04",
  },
  {
    id: 5,
    nombre: "05",
  },
];

function SelectorMesa() {
  const [activa, setActiva] = useState(1);
  const [buscarMesa, setBuscarMesa] = useState(false);
  const mesaActiva = mesas.find((x) => x.id === activa);
  const estilosMesaActiva =
    "cursor-pointer rounded-xl border-2 border-vino bg-vino text-white w-16 h-16 flex items-center justify-center font-semibold text-lg";
  return (
    <>
      <div className={style.tapIzquierdo}>
        <label className="p-2 pl-0 ">Mesa:</label>
        <div className= {style.mesaSelector}>
          <label>{mesaActiva.nombre}</label>
          <ArrowsPointingOutIcon
            className= {style.seleccionMesa}
            onClick={() => setBuscarMesa(true)}
          />
        </div>
      </div>
      <Transition
        show={buscarMesa}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className={style.numeroMesa}>
          <div className="flex flex-row justify-between mb-8">
            <h4 className="uppercase font-semibold">Seleccione una mesa</h4>
            <ArrowsPointingInIcon
              className="h-6 w-6 ml-4 cursor-pointer"
              onClick={() => setBuscarMesa(false)}
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {mesas.map((mesa) => (
              <div
                className={
                  mesaActiva.id === mesa.id
                    ? estilosMesaActiva
                    : "cursor-pointer rounded-xl border-2 border-vino-light w-16 h-16 flex items-center justify-center font-semibold text-lg"
                }
                onClick={() => {
                  setActiva(mesa.id);
                  setBuscarMesa(false);
                }}
              >
                {mesa.nombre}
              </div>
            ))}
          </div>
        </div>
      </Transition>
    </>
  );
}

function TabPrincipal() {
  return (
    <div className={style.contenedorMenu}>
      <ul className={style.ulMenu}>
        <li className={style.liSeleccionadoMenu}>
          <div>Desayunos</div>
        </li>
        <li className={style.liHoverMenu}>
          <div>Entradas</div>
        </li>
        <li className={style.liHoverMenu}>
          <div>Ensaladas</div>
        </li>
        <li className={style.liHoverMenu}>
          <div>Pastas</div>
        </li>
        <li className={style.liHoverMenu}>
          <div>Pizzas</div>
        </li>
        <li className={style.liHoverMenu}>
          <div>Postres</div>
        </li>
        <li className= {SVGPolylineElement.liMenuUltimo}>
          <div>Bebidas</div>
        </li>
      </ul>
    </div>
  );
}

export function MenuTabs() {
  return (
    <div className="flex flex-row bg-white text-white">
      <SelectorMesa />
      <TabPrincipal />
    </div>
  );
}
