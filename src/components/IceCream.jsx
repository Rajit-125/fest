function IceCream(){
    return(
        <>
        <div className=" flex flex-col flex-1 bg-cover bg-[url('./assets/icecream.jpg')]">
          <h1 className=" mx-80 flex items-center text-9xl text-cyan-50">ICE CREAMS✌️</h1>
          <IceCreamItem name="venilla" price="$40"></IceCreamItem>
          <IceCreamItem name="butterscotch" price="$40"></IceCreamItem>
          <IceCreamItem name="chocolate" price="$40"></IceCreamItem>
          <IceCreamItem name="pista" price="$40"></IceCreamItem>
        </div>
        </>
    )
}

function IceCreamItem({name,price}){
  return(
    <p1 className=" mx-64 my-10 flex items-center text-3xl text-cyan-50 font-bold">{name}-----------{price}</p1>
  )
}

export default IceCream