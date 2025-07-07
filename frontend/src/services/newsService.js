import axios from 'axios';

export default {
  getNews: async () => {
    const response = await axios.get('http://localhost:5000/api/news');
    return response.data;
  }
};