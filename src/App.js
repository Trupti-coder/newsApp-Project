
import { useEffect, useState } from 'react';

import './App.css';
import SearchBar from './components/SearchBar';
import categoryFilter from './components/CategoryFilter';
import NewsList from './components/NewsList';
import Bookmarks from './components/Bookmarks';
import CategoryFilter from './components/CategoryFilter';

function App() {

  const[articles,setArticles]=useState([]);
  const[bookmarks,setBookmarks]=useState([]);
  const[category,setCategory]=useState('');
  const[query,setQuery]=useState('');


  useEffect(()=>{
    fetchNews(category,query).then(setArticles)
  },[category,query])



  return (
    <>
    <div>

    <h1>News Reader App</h1>
    
    <SearchBar />

    <h1>News Reader App</h1>
      <SearchBar onSearch={setQuery} />
      <CategoryFilter onSelectCategory={setCategory} />
      <NewsList articles={articles} onBookmark={handleBookmark} />
      <Bookmarks bookmarks={bookmarks} />

    
  
    </div>

    



    </>
  );
}

export default App;
