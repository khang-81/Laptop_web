import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const authService = {
  register: async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  },
  
  login: async (credentials) => {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  },
  
  getProfile: async (token) => {
    const response = await axios.get(`${API_URL}/me`, {
      headers: {
        'x-auth-token': token
      }
    });
    return response.data;
  },
  
  updateProfile: async (userData, token) => {
    const response = await axios.put(`${API_URL}/profile`, userData, {
      headers: {
        'x-auth-token': token
      }
    });
    return response.data;
  },
  
  changePassword: async (passwords, token) => {
    const response = await axios.put(`${API_URL}/password`, passwords, {
      headers: {
        'x-auth-token': token
      }
    });
    return response.data;
  }
};

export default authService;