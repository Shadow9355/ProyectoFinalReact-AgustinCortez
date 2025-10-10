import { Link } from "react-router-dom";
import "./item.css"
import { useCart } from "../../../context/cartContext"



function Item({id, src, producto, precio}){

    const { addItem } = useCart();

    const handleAdd = () => {
        addItem({producto, precio, id},  1);
        Swal.fire("Agregado", `${producto} se añadio al carrito`, "success");
    }

    return(
        <>
            <div className="card">
                <Link to={`/producto/${id}`}>
                    <img src={src} className="card-img-top img-fluid" alt={producto}/>
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{producto}</h5>
                    <h5>${precio}</h5>
                    <button onClick={handleAdd} className="btn btn-primary btn-sm">Agregar al carrito</button>
                </div>
            </div>
        </>
    );
}

export default Item