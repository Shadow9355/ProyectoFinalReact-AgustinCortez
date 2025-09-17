import { useEffect, useState } from "react";
import Item from "./Item"

function ItemListContainer({genero}) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/productos.json")
      .then(response => response.json())
      .then(data => {
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
      <div className='list-item-container'>
        {productos.map((item) => (
          <Item 
            key={item.id} 
            id={item.id}
            producto={item.producto} 
            precio={item.precio} 
            genero={item.genero} 
            src={item.src} 
            alt={item.producto} />
        ))}
      </div>
    </>
  );
}

export default ItemListContainer