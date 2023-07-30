function Chats(){
    return(
        <>
        <div className=" flex flex-col flex-1 bg-cover bg-[url('./assets/chats.jpg')]">
          <h1 className=" mx-80 flex items-center text-8xl text-cyan-50">YUMMY CHATS😉</h1>
          <ChatsItem name="panipuri" price="$40"></ChatsItem>
          <ChatsItem name="shevpuri" price="$45"></ChatsItem>
          <ChatsItem name="bhelpuri" price="$40"></ChatsItem>
          <ChatsItem name="dahipuri" price="$50"></ChatsItem>
          <ChatsItem name="masalapuri" price="$45"></ChatsItem>
          <ChatsItem name="samosa" price="$40"></ChatsItem>
        </div>
        </>
    )
}

function ChatsItem({name,price}){
  return(
    <p className=" mx-72 my-10 flex items-center text-3xl text-cyan-50 font-bold">{name}---------{price}</p>
  )
}

export default Chats