import { useContext } from "react";
import CartContext from "../context/CartContext";

function AddCart(){
    const cart= useContext(CartContext);
    const removeFromCart = (id) => {
        cart.setCartData((prev) => {
            const itemIndex=prev.findIndex(item=> item.id===id)
            if (prev[itemIndex].count>1) {
             const updatedCart = prev.map(item =>
              item.id===id ? {...item,count:item.count -1} : item 
             )
             return updatedCart
            }
            else {
              return prev.filter(item=> item.id===id)
            }
          });
      };

    return(
        <>
        <div>
           {
            cart.cartData.length ?(
                cart.cartData.map(item=>{
                    return(
                        <>
                        <p className=" mx-10 my-10 flex items-center text-2xl text-blue-400">{item.name}----${item.price} *{item.count}</p>
                        <button className=" mx-10 flex items-center text-xl font-bold hover:bg-blue-400 hover:text-slate-100" onClick={()=>removeFromCart(item.id)}>remove </button>
                        </>
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