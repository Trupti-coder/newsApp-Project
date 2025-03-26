import { useState } from "react";

function SearchBar({onSearch}){

    const[query,setQuery]=useState('');

    const handleSearch=()=>{

        onSearch(query);
    }

    
    return(
        <>
        <div >

            <input
            type="text"
            placeholder="Search for news..."
            value={query}
            onChange={(event)=>setQuery(event.target.value)}

            />

        </div>
        </>
    );
}
export default SearchBar;