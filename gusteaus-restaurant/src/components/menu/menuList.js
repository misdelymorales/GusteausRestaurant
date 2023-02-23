import db from '../../firebaseConfig';
import React,{useState,useEffect} from 'react';
import { ItemComida } from "./menu/menuItem";

export function MenuList(){ 
    const [items,setItems]=useState([])
    const fetchItems=async()=>{
        const response=db.collection('items');
        const data=await response.get();
        data.docs.forEach(item=>{
         setItems([...items,item.data()])
        })
      }
      useEffect(() => {
        fetchItems();
      }, [])

    return(
        <div className="grid grid-cols-2 gap-4 pt-4 ">
            {
        items && items.map(blog=>{
          return(
            <div className="grid grid-cols-2 gap-4 pt-4 ">
              <h4>{items.nombre}</h4>
              <p>{items.descripcion}</p>
            </div>
          )
        })
      }
        </div>
    )
}