import React from "react";
import { MenuProvider } from "../../../context/menuContext";
import { Layout } from "../../layout";
import { ItemComida } from "../../menu/menuItem";
import { MenuTabs } from "../../menu/tapPrincipal";
import { Resumen } from "../../menu/menuResumen";
import { doc } from "firebase/firestore";
import { useFirestoreDocData, useFirestore } from "reactfire";

export function Menu() {
  const menuRef = doc(useFirestore(), "menuItems", "0vzMufWSvbATQrKUv7l1");

  // subscribe to a document for realtime updates. just one line!
  const { status, data, error } = useFirestoreDocData(menuRef);

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

      {/* <Fetch/> */}
    </>
  );
}
