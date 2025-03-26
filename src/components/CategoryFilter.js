const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

function CategoryFilter({onSelectCategory}){

  
    return(
        <>

        <select onChange={(event)=>onSelectCategory(event.target.value)}>

            <option value="">All categories</option>
            
            {categories.map((category)=>(

                <option key={category} value={category}>{category}</option>
            ))}
        

        </select>


        </>
    );
}
export default CategoryFilter;