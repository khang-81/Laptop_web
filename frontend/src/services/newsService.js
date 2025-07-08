// src/services/newsService.js
import axios from 'axios';

const newsService = {
  getNews: async () => {
    const response = await axios.get('http://localhost:5000/api/news');
    return response.data;
  }
};

export default newsService;
