import { useContext } from "react"
import CartContext from "../context/CartContext"

function Dosa(){
  const cart= useContext(CartContext);
  const addHandler=(name,price)=>{
      cart.setCartData((cur)=>[...cur,{name,price}]);
  }

    return(
        <>
        <div className=" flex flex-col flex-1 bg-cover bg-[url('./assets/dosa.jpg')]">
          <h1 className=" mx-96 flex items-center text-9xl text-cyan-50">DOSA🤤🤤</h1>    
          <DosaItem id="1." name="masaladosa" price="$60" button="ADD" onClick={addHandler}></DosaItem>  
          <DosaItem id="2." name="butter masaladosa" price="$60" button="ADD" onClick={addHandler}></DosaItem>  
          <DosaItem id="3." name="plaindosa" price="$60" button="ADD" onClick={addHandler}></DosaItem>  
          <DosaItem id="4." name="oniondosa" price="$60" button="ADD" onClick={addHandler}></DosaItem>  
        </div>
        </>
    )
}

function DosaItem({id,name,price,button,onClick}){
    return(
      <>
      <p className=" mx-72 my-10 flex items-center text-3xl text-cyan-50 font-bold">{id}{name}---------{price}</p>
      <button className=" mx-72 flex items-center text-3xl text-cyan-50 font-bold hover:bg-blue-500 w-24 hover:text-red-500 px-4" onClick={()=>onClick(name,price)}>{button}</button>
      </>
    )
}
export default Dosa