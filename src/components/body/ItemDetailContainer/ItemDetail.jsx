import "./detail.css"
import { useCart } from "../../../context/cartContext"
import ItemCount from "./ItemCount";

function ItemDetail({producto}){
    if (!producto) return null;

    const { addItem } = useCart();

    const handleAdd = (cantidad) => {
        addItem(producto, cantidad);
        Swal.fire("Agregado", `${producto.producto} x ${cantidad} se añadio al carrito`, "success"); 
    }

    return (
        <>
        <div className="detail-container">
            <div className="detail-image">
                <img src={producto.src} alt={producto.producto} />
            </div>
            <div className="detail-info">
                <h2>Nombre: {producto.producto}</h2>
                <h4>Genero: {producto.genero}</h4>
                <h5>Descripcion: {producto.descripcion}</h5>
                <h3>Precio: ${producto.precio}</h3>
                
                <ItemCount stock={10} onAdd={handleAdd}/>
            </div>
        </div>
        </>
    );
}

export default ItemDetail