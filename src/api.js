const API_KEY = 'cf7167dac7d54e7eb9713c2d4a28da18'; 
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

export const fetchNews = async (category = '', query = '') => {
  try {
    const url = `${BASE_URL}?country=us&apiKey=${API_KEY}${
      category ? `&category=${category}` : ''
    }${query ? `&q=${query}` : ''}`;

    console.log('Fetching from:', url);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data.articles || [];
  } catch (error) {
    console.error('Error fetching news:', error.message);
    return [];
  }
};
