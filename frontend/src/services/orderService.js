import axios from 'axios';

const API_URL = 'http://localhost:5000/api/orders';

const orderService = {
  createOrder: async (orderData, token) => {
    const response = await axios.post(API_URL, orderData, {
      headers: {
        'x-auth-token': token
      }
    });
    return response.data;
  },
  
  getOrders: async (token) => {
    const response = await axios.get(API_URL, {
      headers: {
        'x-auth-token': token
      }
    });
    return response.data;
  },
  
  getOrderById: async (orderId, token) => {
    const response = await axios.get(`${API_URL}/${orderId}`, {
      headers: {
        'x-auth-token': token
      }
    });
    return response.data;
  }
};

export default orderService;