function Bookmarks({bookmarks}){
    return(
        <>
        <div>
            <h2>Bookmarked Articles</h2>

            {bookmarks.length===0 ? <p>No bookmarks yet.</p>:(
                bookmarks.map((article,index)=>(
                    <div>





                        
                    </div>
                ))
            )}
        </div>
        
        </>
    );
}

export default Bookmarks;