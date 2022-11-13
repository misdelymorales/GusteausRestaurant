import React from "react";




export function Layout({ children, withMenu }) {
  return(
    <div className="bg-primary-100 absolute top-0 h-50 w-full text-primary-500">
      <nav className="topNavigation">
        
        <div className="absolute inset-y-0 left-0 flex items-center">
          <img className="max-w-full h-12 mx-1" src="/images/GUSTEAUSLOGO.png" alt="logo"/>
          <img className="block h-8 ml-12" src="/images/edit.svg" alt="edit"/>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <div className=" mx-12 flex items-center">
            <p >1</p>
            <img className="block h-6 mx-2" src="/images/checkmark.svg" alt="Pedidos Listos"/>
          </div>
          <p className="mr-12">Mesonero: Luis</p>
          <img className="block h-6 mx-2" src="/images/logout.svg" alt="logout"/>
        </div>
      </nav>
      <div className="layoutMain">{children}</div>
    </div>
  );
}
