import { useContext } from "react";
import CartContext from "../context/CartContext";

function AddCart(){
    const cart= useContext(CartContext);
    return(
        <>
        <div>
           {
            cart.cartData.length ?(
                cart.cartData
            ):(
                <h1 className="mx-10">First Order karo bhaiiiiiiiiiiiii</h1>
            )
           }
        </div>
        </>
    )
}
export default AddCart