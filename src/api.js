const API_KEY="cf7167dac7d54e7eb9713c2d4a28da18";
const BASE_URL="https://newsapi.org/v2/everything?q=tesla&from=2025-02-25&sortBy=publishedAt&apiKey=cf7167dac7d54e7eb9713c2d4a28da18";

export const fetchNews = async (category = '', query = '') =>{



    try {
        const url = `${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}${
          category ? `&category=${category}` : ''
        }${query ? `&q=${query}` : ''}`;


        const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }


}