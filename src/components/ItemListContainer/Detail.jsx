import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./detail.css"

function Detail(){
    const {id} = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        fetch("/productos.json")
            .then(response => response.json())
            .then(data => {
                const item = data.find((prod) => prod.id === parseInt(id));
                setProducto(item)
            })
            .catch(err => console.error("Error cargando el producto:",err))
    }, [id]);

    if(!producto) {
        return <h1>Producto no encontrado . . .</h1>;
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
                <button className="btn btn-primary mt-4">Agregar al carrito</button>
            </div>
        </div>
        </>
    );
}

export default Detail