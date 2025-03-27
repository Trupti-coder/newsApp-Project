
import styles from './Bookmarks.module.css';
function Bookmarks({bookmarks}){
    return(
        <>
        <div>
            <h2 className={styles.bookmark}>Bookmarked Articles</h2>

            {bookmarks.length===0 ? <p>No bookmarks yet.</p>:(
                bookmarks.map((article,index)=>(
                    <div>

                        
                        <h3>{article.title}</h3>
                        <a href={article.url} target="_blank" rel="noopener noreferrer" className={styles.read}>Read more</a>

                       
                    </div>
                ))
            )}
        </div>
        
        </>
    );
}

export default Bookmarks;