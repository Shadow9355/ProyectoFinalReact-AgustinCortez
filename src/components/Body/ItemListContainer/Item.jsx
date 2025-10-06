import { Link } from "react-router-dom";
import "./item.css"


function Item({id, src, producto, precio}){

    return(
        <>
            <div className="card">
                <Link to={`/producto/${id}`}>
                    <img src={src} className="card-img-top img-fluid" alt={producto}/>
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{producto}</h5>
                    <h5>${precio}</h5>
                    <button className="btn btn-primary btn-sm">Agregar al carrito</button>
                </div>
            </div>
        </>
    );
}

export default Item