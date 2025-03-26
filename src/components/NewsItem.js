function NewsItem({article,onBookmark}){

    return(
        <>

        <div>
            <h3>{article.title}</h3>
            <p>{article.description || 'no description available'}</p>
            <a href={article.url} target="_blank" rel="noreferrer">Read More</a>
            <button onClick={()=>onBookmark(article)}>onBookmark</button>
        </div>
        
        
        </>
    );
}

export default NewsItem;