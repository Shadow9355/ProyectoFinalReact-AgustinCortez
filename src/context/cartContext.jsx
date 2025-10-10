import { createContext, useContext } from "react";
import { useState } from "react";

const CartContext = createContext();

function CartProvider({children}) {
    const [cart, setCart] = useState([]);

    const addItem = (item, cantidad) => {
        const existItem = cart.find(prod => prod.id === item.id);
        if(existItem) {
            existItem.cantidad += cantidad;
            setCart([...cart]);
        } else {
            setCart([...cart,
                {
                    id: item.id,
                    producto: item.producto,
                    precio: Number(item.precio),
                    cantidad: Number(cantidad)
                }
            ]);
        }
    }

    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id));
    }

    const clear = () => {
        setCart([]);
    }

    const totalItems = cart.reduce((total, items) => total + items.cantidad, 0);

    const totalPrice = cart.reduce((total, items) => (items.precio * items.cantidad) + total, 0);


    return (
        <CartContext.Provider value={{cart, setCart, addItem, removeItem, clear, totalItems, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext); 
export { CartProvider};