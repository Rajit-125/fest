function Dosa(){
    return(
        <>
        <div className=" flex flex-col flex-1 bg-cover bg-[url('./assets/dosa.jpg')]">
          <h1 className=" mx-96 flex items-center text-9xl text-cyan-50">DOSA🤤🤤</h1>    
          <DosaItem name="masaladosa" price="$60"></DosaItem>  
          <DosaItem name="butter masaladosa" price="$60"></DosaItem>  
          <DosaItem name="plaindosa" price="$60"></DosaItem>  
          <DosaItem name="oniondosa" price="$60"></DosaItem>  
        </div>
        </>
    )
}

function DosaItem({name,price}){
    return(
      <p className=" mx-72 my-10 flex items-center text-3xl text-cyan-50 font-bold">{name}---------{price}</p>
    )
}
export default Dosa