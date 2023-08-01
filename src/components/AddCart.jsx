import { useContext } from "react";
import CartContext from "../context/CartContext";

function AddCart(){
    const cart= useContext(CartContext);
    return(
        <>
        <div>
           {
            cart.cartData.length ?(
                cart.cartData.map(item=>{
                    return(
                        <p className=" mx-10 my-10 flex items-center text-2xl text-blue-400">{item.name}----{item.price}</p>
                    )
                })
            ):(
                <h1 className=" mx-40 my-40 flex text-8xl">First Order karo bhaiiiiiiiiiiiii</h1>
            )
           }
        </div>
        </>
    )
}
export default AddCart