import { useContext } from "react"
import CartContext from "../context/CartContext"

function IceCream(){
  const cart= useContext(CartContext);
  const addHandler=(name,price)=>{
      cart.setCartData((cur)=>[...cur,{name,price}]);
  }

    return(
        <>
        <div className=" flex flex-col flex-1 bg-cover bg-[url('./assets/icecream.jpg')]">
          <h1 className=" mx-80 flex items-center text-9xl text-cyan-50">ICE CREAMS✌️</h1>
          <IceCreamItem name="venilla" price="$40" button="ADD" onClick={addHandler}></IceCreamItem>
          <IceCreamItem name="butterscotch" price="$40" button="ADD" onClick={addHandler}></IceCreamItem>
          <IceCreamItem name="chocolate" price="$40" button="ADD" onClick={addHandler}></IceCreamItem>
          <IceCreamItem name="pista" price="$40" button="ADD" onClick={addHandler}></IceCreamItem>
        </div>
        </>
    )
}

function IceCreamItem({name,price,button,onClick}){
  return(
    <>
    <p1 className=" mx-64 my-10 flex items-center text-3xl text-cyan-50 font-bold">{name}-----------{price}</p1>
    <button className=" mx-72 flex items-center text-3xl text-cyan-50 font-bold hover:bg-blue-500 w-24 hover:text-red-500 px-4" onClick={()=>onClick(name,price)}>{button}</button>
    </>
  )
}

export default IceCream