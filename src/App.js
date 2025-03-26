
import { useEffect, useState } from 'react';

import './App.css';
import SearchBar from './components/SearchBar';
import categoryFilter from './components/CategoryFilter';

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

    <CategoryFilter />
  
    </div>

    



    </>
  );
}

export default App;
