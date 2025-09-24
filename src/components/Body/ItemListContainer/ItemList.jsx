import Item from "./Item"
import "./item.css"


function ItemList({productos}){

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
    )
}

export default ItemList