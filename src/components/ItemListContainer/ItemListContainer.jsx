import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../../services/products";

function ItemListContainer() {
  const {genero} = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        if (genero) {
          setProductos(data.filter(item => item.genero === genero));
        } else {
          setProductos(data);
        }
      })
      .catch(error => console.error("Error cargando los productos:", error))
  }, [genero]);


  return (
    <>
      <ItemList productos={productos}/>
    </>
  );
}

export default ItemListContainer