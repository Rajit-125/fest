function Meals(){
    return(
        <>
        <div className=" flex flex-col flex-1 bg-cover bg-[url('./assets/meals.jpg')]">
          <h1 className=" mx-96 flex items-center text-9xl text-black">MEALS😊😊</h1>  
          <MealsItem name="southindian" price="$80"></MealsItem>
          <MealsItem name="northindian" price="$100"></MealsItem>
        </div>
        </>
    )
}

function MealsItem({name,price}){
  return(
    <p className=" mx-72 my-10 flex items-center text-3xl text-black font-bold">{name}---------{price}</p>
  )
}

export default Meals