import { useState } from "react";

function SearchBar({onSearch}){

    const[query,setQuery]=useState('');

    const handleSearch=()=>{

        onSearch(query);
    }

    
    return(
        <>
        </>
    );
}
export default SearchBar;