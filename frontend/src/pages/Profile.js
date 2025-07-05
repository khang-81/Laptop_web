import React, { useState, useEffect } from 'react';
import authService from '../services/authService';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    address: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;
      
      try {
        const userData = await authService.getProfile(token);
        setUser(userData);
        setFormData({
          full_name: userData.full_name || '',
          phone: userData.phone || '',
          address: userData.address || ''
        });
      } catch (err) {
        console.error('Error fetching profile:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) return;
    
    try {
      await authService.updateProfile(formData, token);
      setUser(prev => ({ ...prev, ...formData }));
      setEditMode(false);
      setMessage('Cập nhật thông tin thành công');
      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Cập nhật thất bại');
    }
  };

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  if (!user) {
    return <div className="container mx-auto px-4 py-8">Vui lòng đăng nhập để xem thông tin</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Thông tin tài khoản</h1>
      
      {message && (
        <div className={`mb-4 p-3 rounded ${message.includes('thành công') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message}
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-md p-6">
        {editMode ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1">Họ và tên</label>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            
            <div className="mb-4">
              <label className="block mb-1">Số điện thoại</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            
            <div className="mb-6">
              <label className="block mb-1">Địa chỉ</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                rows="3"
              ></textarea>
            </div>
            
            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Lưu thay đổi
              </button>
              
              <button
                type="button"
                onClick={() => setEditMode(false)}
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition"
              >
                Hủy
              </button>
            </div>
          </form>
        ) : (
          <div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Thông tin cá nhân</h2>
              <div className="mt-2 space-y-2">
                <p><span className="font-medium">Tên đăng nhập:</span> {user.username}</p>
                <p><span className="font-medium">Email:</span> {user.email}</p>
                {user.full_name && <p><span className="font-medium">Họ và tên:</span> {user.full_name}</p>}
                {user.phone && <p><span className="font-medium">Số điện thoại:</span> {user.phone}</p>}
                {user.address && <p><span className="font-medium">Địa chỉ:</span> {user.address}</p>}
              </div>
            </div>
            
            <button
              onClick={() => setEditMode(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Chỉnh sửa thông tin
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;