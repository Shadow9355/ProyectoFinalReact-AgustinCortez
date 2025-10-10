import { useState } from "react";

function ItemCount({ stock, onAdd }) {

    const [cantidad, setCantidad] = useState(1);

    const sumar = () => {if (cantidad < stock) setCantidad(cantidad + 1)};

    const restar = () => {if (cantidad > 1) setCantidad(cantidad - 1)};

    return (
        <div>
            <button onClick={sumar} className="btn btn-success m-1 py-1">+</button>
            <span className="border rounded m-2 px-2 py-1 text-dark">{cantidad}</span>
            <button onClick={restar} className="btn btn-danger m-1 py-1">-</button>
            <button onClick={() => onAdd(cantidad)} className="btn btn-primary m-2">Agregar al Carrito</button>
        </div>
    );
}

export default ItemCount