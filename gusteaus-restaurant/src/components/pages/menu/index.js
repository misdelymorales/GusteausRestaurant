import React from "react";
import { Layout } from "../../layout";
import {MenuTabs, NavMenu} from "../../menu/tapPrincipal"


export function Menu() {
  return (
    <>
      <Layout>
        <div className="mt-12">
           <MenuTabs/>
        </div>
      </Layout>
    </>
  );
}
