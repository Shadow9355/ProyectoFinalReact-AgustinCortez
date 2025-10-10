import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import "./item.css"
import { getItems } from "../../../firebase";

function ItemListContainer() {
  const {genero} = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getItems()
      .then(res => {
        if (genero){
          setProductos(res.filter(prod => prod.genero === genero))
        } 
        else {
          setProductos(res)
        }
      })
      .catch(err => console.log("Error:",err))
    }, [genero]);


  return (
    <>
      <ItemList productos={productos}/>
    </>
  );
}

export default ItemListContainer