import { Link } from "react-router-dom"
import { useCart } from "../../context/cartContext"

function CartWidget() {

  const { totalItems } = useCart();

  return (
    <>
      <Link to="/carrito">
          <img src="/Carrito.png" alt="Carrito" className="carrito"/>
      </Link>
      <span className="span-cart">{totalItems}</span>
    </>
  )
}

export default CartWidget