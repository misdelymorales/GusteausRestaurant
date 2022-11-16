import React from "react";
import { MenuProvider } from "../../../context/menuContext";
import { Layout } from "../../layout";
import { ItemComida } from "../../menu/menuItem";
import {MenuTabs } from "../../menu/tapPrincipal"
import { Fetch } from "../../../firebase/firebase";


import { Resumen } from "../../menu/menuResumen";
import { MenuTabs, NavMenu } from "../../menu/tapPrincipal";

export function Menu() {
  return (
    <>
      <Layout>
        <div className="mt-12">
          <MenuTabs />
          <div className="flex flex-row  ">
            <MenuProvider>
              <div className="basis-3/4 pr-4">
                <div className="grid grid-cols-2 gap-4 pt-4 ">
                  <ItemComida />
                  <ItemComida />
                  <ItemComida />
                </div>
              </div>
              <div>
                <Resumen />
              </div>
            </MenuProvider>
          </div>
        </div>
      </Layout>
      <ItemComida/>
      <Fetch/>
    </>
  );
}
