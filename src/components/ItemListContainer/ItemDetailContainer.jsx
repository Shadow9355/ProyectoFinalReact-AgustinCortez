// ItemDetailContainer.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch("/productos.json")
    .then(response => {
      console.log("Fetch status:", response.status);
      return response.json();
    })
    .then(data => {
      const item = data.find(prod => prod.id === parseInt(id));
      console.log("Producto encontrado:", item);
      setProducto(item);
      })
      .catch(error => console.error("Error cargando el producto:", error));
    }, [id]);

  if (!producto) return <h1>Cargando producto...</h1>;

  return (
    <>
      <ItemDetail producto={producto}/>
    </>
  )
}

export default ItemDetailContainer;
