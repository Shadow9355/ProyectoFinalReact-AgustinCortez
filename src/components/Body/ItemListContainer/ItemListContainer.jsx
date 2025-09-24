import { use, useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import "./item.css"

function ItemListContainer() {
  const {genero} = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/productos.json") 
      .then(res => res.json())      
      .then(data => {
        if (genero) {
          const productosFiltrados = data.filter(item => item.genero === genero);
          setProductos(productosFiltrados);
        } else {
          setProductos(data);
        }
      })
    })


  return (
    <>
      <ItemList productos={productos}/>
    </>
  );
}

export default ItemListContainer