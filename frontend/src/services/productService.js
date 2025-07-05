import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

const productService = {
  getFeaturedProducts: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },
  
  getProductById: async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },
  
  getProductsByCategory: async (categoryId) => {
    const response = await axios.get(`${API_URL}?category=${categoryId}`);
    return response.data;
  },
  
  searchProducts: async (query) => {
    const response = await axios.get(`${API_URL}/search?query=${query}`);
    return response.data;
  }
};

export default productService;