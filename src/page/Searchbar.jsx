import Navbar from "./Navbar"

function SearchBar(){
    const handleSearch=(searchTerm)=>{
        console.log("searching for: " + searchTerm)
    }
    return(
        <>
        <div>
            <Navbar onSearch={handleSearch}/>
        </div>
        </>
    )
}
export default SearchBar