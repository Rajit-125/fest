
function Juice(){

    return(
        <>
        <div className=" flex flex-col flex-1 bg-[url('./assets/JUICE.jpg')] bg-cover" >
          <h1 className=" mx-80 flex items-center text-9xl text-cyan-50 font-bold">COOL JUICE😍</h1>   
          <ul className=" ">
          <JuiceItem name="orange"  price="$40"></JuiceItem>
          <JuiceItem name="watermelon"  price="$40"></JuiceItem>
          <JuiceItem name="apple"  price="$40"></JuiceItem>
          <JuiceItem name="grapes"  price="$40"></JuiceItem>
          </ul>
        </div>
        </>
    )
}
function JuiceItem({name,price}){
   return(
    <p1 className=" mx-64 my-10 flex items-center text-3xl text-cyan-50 font-bold">{name}------------{price}</p1>
   )
}

export default Juice