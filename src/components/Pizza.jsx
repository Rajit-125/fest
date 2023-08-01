import { useContext } from "react"
import CartContext from "../context/CartContext"

function Pizza(){
    const cart= useContext(CartContext);
    const addHandler=(name,price)=>{
        cart.setCartData((cur)=>[...cur,{name,price}]);
    }
    return(
        <>
        <div className=" flex flex-col flex-1 bg-cover bg-[url('./assets/pizza.jpg')]">
            <h1 className=" mx-96 flex items-center text-9xl text-cyan-50">PIZZA😜😜</h1>
            <PizzaItem  name="margherita" size="regular" price="$245" button="ADD" onClick={addHandler}></PizzaItem>
            <PizzaItem  name="veggie paradise" size="medium" price="$469" button="ADD" onClick={addHandler}></PizzaItem>
            <PizzaItem  name="peppy panner" size="medium" price="$459" button="ADD" onClick={addHandler}></PizzaItem>
            <PizzaItem  name="veg extravaganza" size="medium" price="$549" button="ADD" onClick={addHandler}></PizzaItem>
        </div>
        </>
    )
}

function PizzaItem({name,size,price,button,onClick}){
    return(
        <>
        <p className=" mx-72 my-10 flex items-center text-3xl text-cyan-50 font-bold">{name},{size}-------{price}</p>
        <button className=" mx-72 flex items-center text-3xl text-cyan-50 font-bold hover:bg-blue-500 w-24 hover:text-red-500 px-4" onClick={()=>onClick(name,price)}>{button}</button>  
        </>
    )
}
export default Pizza