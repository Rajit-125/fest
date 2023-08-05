import { useContext } from "react";
import CartContext from "../context/CartContext";


function Chats(){
  const cart= useContext(CartContext);
  const addHandler=(name,price)=>{
      cart.setCartData((cur)=>[...cur,{name,price}]);
  }

    return(
        <>
        <div className=" flex flex-col flex-1 bg-cover bg-[url('./assets/chats.jpg')]">
          <h1 className=" mx-80 flex items-center text-8xl text-cyan-50">YUMMY CHATS😉</h1>
          <ChatsItem id="1." name="panipuri" price="$40" button="ADD" onClick={addHandler}></ChatsItem>
          <ChatsItem id="2." name="shevpuri" price="$45" button="ADD" onClick={addHandler}></ChatsItem>
          <ChatsItem id="3." name="bhelpuri" price="$40" button="ADD" onClick={addHandler}></ChatsItem>
          <ChatsItem id="4." name="dahipuri" price="$50" button="ADD" onClick={addHandler}></ChatsItem>
          <ChatsItem id="5." name="masalapuri" price="$45" button="ADD" onClick={addHandler}></ChatsItem>
          <ChatsItem id="6." name="samosa" price="$40" button="ADD" onClick={addHandler}></ChatsItem>
        </div>
        </>
    )
}

function ChatsItem({id,name,price,button,onClick}){
  return(
    <>
    <p className=" mx-72 my-10 flex items-center text-3xl text-cyan-50 font-bold">{id}{name}---------{price}</p>
    <button className=" mx-72 flex items-center text-3xl text-cyan-50 font-bold hover:bg-blue-500 w-24 hover:text-red-500 px-4" onClick={()=>onClick(name,price)}>{button}</button>
    </>
  )
}

export default Chats