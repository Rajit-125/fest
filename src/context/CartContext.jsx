import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext([]);

export default CartContext

export const CartProvider = ({ children }) => {
    const [cartData, setCartData] = useState([]);

    const removeFromCart = (Itemid) => {
        setCartData((prev) => ({ ...prev, [Itemid]: prev[Itemid] - 1 }));
    }
    const upadateItemCount = (newamount, Itemid) => {
        setCartData((prev) => ({ ...prev, [Itemid]: newamount }));
    }
    const value = { cartData, setCartData, removeFromCart, upadateItemCount };
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}