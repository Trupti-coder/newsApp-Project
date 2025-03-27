function NewsItem({article,onBookmark}){

    return(
        <>

        <div>
            <h3>{article.title}</h3>
            <p>{article.description || 'no description available'}</p>
            <a href={article.url} target="_blank" rel="noreferrer" className={styles.content}>Read More</a><br></br>
            <button onClick={()=>onBookmark(article)}>onBookmark</button>
        </div>
        
        
        </>
    );
}

export default NewsItem;