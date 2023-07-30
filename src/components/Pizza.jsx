import { useContext } from "react"
import CartContext from "../context/CartContext"

function Pizza(){
    const cart= useContext(CartContext);
    const addHandler=()=>{
        cart.setCartData(["margherita"]);
    }
    return(
        <>
        <div className=" flex flex-col flex-1 bg-cover bg-[url('./assets/pizza.jpg')]">
            <h1 className=" mx-96 flex items-center text-9xl text-cyan-50">PIZZA😜😜</h1>
            <PizzaItem  name="margherita" size="regular" price="$245"></PizzaItem>
            <PizzaItem  name="veggie paradise" size="medium" price="$469"></PizzaItem>
            <PizzaItem  name="peppy panner" size="medium" price="$459"></PizzaItem>
            <PizzaItem  name="veg extravaganza" size="medium" price="$549"></PizzaItem>
        </div>
        </>
    )
}

function PizzaItem({name,size,price}){
    return(
        <p className=" mx-72 my-10 flex items-center text-3xl text-cyan-50 font-bold">{name},{size}-------{price}</p>
    )
}
export default Pizza