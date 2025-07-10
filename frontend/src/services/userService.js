// src/services/userService.js
import axios from 'axios';

const api = axios.create({
  baseURL: '/api/users'
});

const userService = {
  updateProfile: async (formData) => {
    const response = await api.put('/profile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  },

  deleteAccount: async () => {
    await api.delete('/');
  },

  changePassword: async (currentPassword, newPassword) => {
    const response = await api.put('/password', {
      currentPassword,
      newPassword
    });
    return response.data;
  }
};

export default userService;