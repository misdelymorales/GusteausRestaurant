import React from "react";
import { Layout } from "../../layout";
import { ItemComida } from "../../menu/menuItem";
import {MenuTabs } from "../../menu/tapPrincipal"
import { Fetch } from "../../../firebase/firebase";



export function Menu() {
  return (
    <>
      <Layout>
        <div className="mt-12">
           <MenuTabs/>
        </div>
      </Layout>
      <ItemComida/>
      <Fetch/>
    </>
  );
}
