import axios from 'axios';

const API_URL = 'http://localhost:5000/api/cart';

const cartService = {
  getCart: async (token) => {
    const response = await axios.get(API_URL, {
      headers: {
        'x-auth-token': token
      }
    });
    return response.data;
  },
  
  addToCart: async (productId, quantity, token) => {
    const response = await axios.post(
      API_URL,
      { product_id: productId, quantity },
      {
        headers: {
          'x-auth-token': token
        }
      }
    );
    return response.data;
  },
  
  updateCartItem: async (itemId, quantity, token) => {
    const response = await axios.put(
      `${API_URL}/${itemId}`,
      { quantity },
      {
        headers: {
          'x-auth-token': token
        }
      }
    );
    return response.data;
  },
  
  removeFromCart: async (itemId, token) => {
    const response = await axios.delete(`${API_URL}/${itemId}`, {
      headers: {
        'x-auth-token': token
      }
    });
    return response.data;
  },
  
  clearCart: async (token) => {
    const response = await axios.delete(API_URL, {
      headers: {
        'x-auth-token': token
      }
    });
    return response.data;
  }
};

export default cartService;