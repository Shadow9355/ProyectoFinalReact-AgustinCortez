import { createContext } from "react";
import { useState } from "react";

const CartContext = createContext();

function CartProvider(props) {
    const [cart, setCart] = useState(null);

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }; 
