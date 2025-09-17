// ItemDetailContainer.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../../services/products";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getProductsById(id).then((item) => setProducto(item));
  }, [id]);

  if (!producto) return <h1>Cargando...</h1>;

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;
