import { useContext } from "react"
import CartContext from "../context/CartContext"

function Juice(){
  const cart= useContext(CartContext);
    const addHandler=(name,price)=>{
        cart.setCartData((cur)=>[...cur,{name,price}]);
    }

    return(
        <>
        <div className=" flex flex-col flex-1 bg-[url('./assets/JUICE.jpg')] bg-cover" >
          <h1 className=" mx-72 flex items-center text-9xl text-cyan-50 font-bold">COOL JUICE😍</h1>   
          <JuiceItem name="orange"  price="$40" button="ADD" onClick={addHandler}></JuiceItem>
          <JuiceItem name="watermelon"  price="$40" button="ADD" onClick={addHandler}></JuiceItem>
          <JuiceItem name="apple"  price="$40" button="ADD" onClick={addHandler}></JuiceItem>
          <JuiceItem name="grapes"  price="$40" button="ADD" onClick={addHandler}></JuiceItem>
        </div>
        </>
    )
}
function JuiceItem({name,price,button,onClick}){
   return(
    <>
    <p className=" mx-64 my-10 flex items-center text-3xl text-cyan-50 font-bold">{name}------------{price}</p>
    <button className=" mx-64 flex items-center text-3xl text-cyan-50 font-bold hover:bg-blue-500 w-24 hover:text-red-500 px-4" onClick={()=>onClick(name,price)}>{button}</button>
    </>
   )
}

export default Juice