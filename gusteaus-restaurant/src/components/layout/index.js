import React from "react";
import style from "./layout.style";
import {
  ArrowRightOnRectangleIcon,
  PencilSquareIcon,
  CheckBadgeIcon
} from "@heroicons/react/24/solid";

export function Layout({ children}) {
  return (
    <>
    <div className={style.layoutContainer}>
        <div className={style.layoutHeaderLeft}>
          <img
            className={style.layoutLogo}
            src="/images/GUSTEAUSLOGO.png"
            alt="logo"
          />
          <PencilSquareIcon className="h-6 w-6 ml-4" />
        </div>
        <div className={style.layoutHeaderRight}>
          <div className=" mx-12 flex items-center">
            <p>1</p>
            <CheckBadgeIcon className="h-6 w-6 ml-4 text-green"/>
          </div>
          <p className="mr-12">Mesonero: Luis</p>
          <ArrowRightOnRectangleIcon className="h-6 w-6 mr-2" />
          {/* <img className="block h-6 mx-2" src="/images/logout.svg" alt="logout"/> */}
        </div>
      
    </div>
    <div className="w-full">{children}</div>
    </>
    
  );
}
