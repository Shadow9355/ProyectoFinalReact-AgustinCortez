import { useCart } from "../context/cartContext"


function Cart() {

    const { cart, removeItem, totalPrice, clear} = useCart();

    const clearCart = () => {
        clear()
        Swal.fire("Compra realizada", `Total: $${totalPrice}`, "success")
    }

    if (cart.length === 0) {
        return <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}><h2 className="border-bottom border-light p-3">El carrito esta vacio</h2></div>;
    }

    console.log(cart)

    return (
        <>
            <h2 className="text-center pt-3">Carrito</h2>
            <div className="cart-container">
                {cart.map(prod => (
                    <div key={prod.id} className="row align-items-center border border-light rounded mx-5 cart-rows">
                        <h3 className="p-2 px-4 col-4">{prod.producto}</h3>
                        <h3 className="col-1">{prod.cantidad}</h3>
                        <h4 className="col-5 text-center">Subtotal: {prod.precio * prod.cantidad}</h4>
                        <button onClick={() => removeItem(prod.id)} className="btn btn-danger col-1 text-end">Eliminar</button>
                    </div>
                ))}
                <div className="pt-5 text-center">
                    <h3>Total: ${totalPrice}</h3>
                    <button onClick={clearCart} className="btn btn-success">Confirmar compra</button>
                </div>
            </div>
        </>
    )
}

export default Cart