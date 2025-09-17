import "./detail.css"

function ItemDetail({producto}){
    if (!producto) return null;

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

export default ItemDetail