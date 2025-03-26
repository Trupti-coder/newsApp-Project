function NewsItem({article,onBookmark}){

    return(
        <>

        <div>
            <h3>{article.title}</h3>
            <p>{article.description || 'no description available'}</p>
        </div>
        
        
        </>
    );
}

export default NewsItem;