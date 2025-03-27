
import { useEffect, useState } from 'react';

import './App.css';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import NewsList from './components/NewsList';
import Bookmarks from './components/Bookmarks';
import { fetchNews } from './api';


function App() {

  const[articles,setArticles]=useState([]);
  const[bookmarks,setBookmarks]=useState([]);
  const[category,setCategory]=useState('');
  const[query,setQuery]=useState('');


  useEffect(()=>{
    fetchNews(category,query).then(setArticles)
  },[category,query])


  const handleBookmark = (article) => {
    // Prevent duplicate bookmarks
    if (!bookmarks.find((item) => item.url === article.url)) {
      setBookmarks((prev) => [...prev, article]);
    }
  };



  return (
    <>
    <div>


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
