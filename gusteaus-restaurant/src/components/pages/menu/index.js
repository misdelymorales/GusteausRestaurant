import React from "react";
import { Layout } from "../../layout";
import { ItemComida } from "../../menu/menuItem";
import { Resumen } from "../../menu/menuResumen";
import { MenuTabs, NavMenu } from "../../menu/tapPrincipal";

export function Menu() {
  return (
    <>
      <Layout>
        <div className="mt-12">
          <MenuTabs />
          <div className="flex flex-row  ">
            <div className="basis-3/4 pr-4">
              <div className="grid grid-cols-2 gap-4 pt-4 ">
                <ItemComida />
                <ItemComida />
                <ItemComida />
              </div>
            </div>
            <div >
              <Resumen/>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
