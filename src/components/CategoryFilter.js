const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

function categoryFilter({onSelectCategory}){

    <select onChange={(event)=>onSelectCategory(event.target.value)}>

    </select>


    return(
        <>


        </>
    );
}
export default categoryFilter;