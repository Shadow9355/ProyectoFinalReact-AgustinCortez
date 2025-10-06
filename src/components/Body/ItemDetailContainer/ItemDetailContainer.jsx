// ItemDetailContainer.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getItems } from "../../../firebase";
import "./detail.css"

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  
  useEffect(() => {
    getItems()
      .then((res) => {
        const item = res.find((i) => i.id === parseInt(id));
        setProducto(item)
      })
      .catch((error) => console.log("error:",error));
  }, [id]);

  return (
    <>
      {producto ? 
      <ItemDetail producto={producto}/>
      : <h4>Cargando productos . . .</h4>}
    </>
  )
}

export default ItemDetailContainer;
