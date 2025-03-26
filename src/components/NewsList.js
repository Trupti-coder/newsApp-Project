import NewsItem from "./NewsItem";
function NewsList({articles,onBookmark}){
    return(
        <>

        <div>

        {articles.map((article, index) => (
        <NewsItem key={index} article={article} onBookmark={onBookmark} />
      ))}

           
        </div>


        
        
        </>
    );
}

export default NewsList;