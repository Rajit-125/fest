import { useContext } from "react";
import CartContext from "../context/CartContext";

function Meals(){
  const cart= useContext(CartContext);
  const addHandler=(name,price)=>{
      cart.setCartData((cur)=>[...cur,{name,price}]);
  }

    return(
        <>
        <div className=" flex flex-col flex-1 bg-cover bg-[url('./assets/meals.jpg')]">
          <h1 className=" mx-96 flex items-center text-9xl text-black">MEALS😊😊</h1>  
          <MealsItem id="1." name="southindian" price="$80" button="ADD" onClick={addHandler}></MealsItem>
          <MealsItem id="2." name="northindian" price="$100" button="ADD" onClick={addHandler}></MealsItem>
        </div>
        </>
    )
}

function MealsItem({id,name,price,button,onClick}){
  return(
    <>
    <p className=" mx-72 my-10 flex items-center text-3xl text-black font-bold">{id}{name}---------{price}</p>
    <button className=" mx-72 flex items-center text-3xl text-black font-bold hover:bg-blue-500 w-24 hover:text-red-500 px-4" onClick={()=>onClick(name,price)}>{button}</button>
    </>
  )
}

export default Meals