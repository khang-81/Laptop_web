// src/services/authService.js
import axios from 'axios';
import { setAuthToken } from '../utils/auth';

const api = axios.create({
  baseURL: '/auth'
});

const authService = {
  login: async (credentials) => {
    const response = await api.post('/login', credentials);
    const { token } = response.data;
    localStorage.setItem('token', token);
    setAuthToken(token);
    return response.data;
  },

  register: async (userData) => {
    const response = await api.post('/register', userData);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
    setAuthToken(null);
  },

  getCurrentUser: async () => {
    const response = await api.get('/me');
    return response.data;
  },



  // Thêm hàm đổi mật khẩu
  changePassword: async (currentPassword, newPassword) => {
    const response = await api.put('/password', {
      currentPassword,
      newPassword
    });
    return response.data;
  }
};

export default authService;