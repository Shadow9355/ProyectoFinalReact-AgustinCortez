// ItemDetailContainer.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import "./detail.css"

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  
  useEffect(() => {
    fetch("/productos.json")
      .then((res) => res.json())
      .then((data) => {
        const item = data.find((i) => i.id === parseInt(id));
        setProducto(item)
      })
      .catch((error) => console.log("error:",error));
  }, [id]);

  return (
    <>
      {producto ? 
      <ItemDetail producto={producto}/>
      : <p>Error cargando los productos</p>}
    </>
  )
}

export default ItemDetailContainer;
