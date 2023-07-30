import { useContext } from "react"
import CartContext from "../context/CartContext"

function Pizza(){
    const cart= useContext(CartContext);
    const addHandler=()=>{
        cart.setCartData(["margherita"]);
    }
    return(
        <>
        <div>
            <h1 className=" mx-96 my-10 flex items-center text-9xl">PIZZA😜😜</h1>
            <p className=" mx-72 my-10 flex items-center text-3xl">Margherita-----------------medium-------------------------239</p>
            <button onClick={addHandler}>ADD</button>
            <p className=" mx-72 my-10 flex items-center text-3xl">Veggie Paradise------------medium-------------------------459</p>
            <p className=" mx-72 my-10 flex items-center text-3xl">Peppy Panner---------------medium-------------------------459</p>
        </div>
        </>
    )
}
export default Pizza