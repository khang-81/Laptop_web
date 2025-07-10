import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import userService from '../services/userService';
import { toast } from 'react-toastify';
import { isAuthenticated } from '../utils/auth';
import ChangePasswordModal from '../components/ChangePasswordModal'; // Import modal change password

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [loading, setLoading] = useState(true);
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState('');
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }
    fetchUserProfile();
  }, [navigate]);

  const fetchUserProfile = async () => {
    try {
      const userData = await authService.getCurrentUser();
      setUser(userData);  // Set user data
      setFormData({
        name: userData.name,
        email: userData.email,
        phone: userData.phone || '',
        address: userData.address || ''
      });
      setAvatarPreview(userData.avatar || '/images/default-avatar.jpg');
      setLoading(false);
    } catch (error) {
      toast.error('Lỗi khi tải thông tin cá nhân');
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('address', formData.address);
      if (avatar) {
        formDataToSend.append('avatar', avatar);
      }
      const updatedUser = await userService.updateProfile(formDataToSend);
      setUser(updatedUser);
      toast.success('Cập nhật thông tin thành công');
      setEditMode(false);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Cập nhật thất bại');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa tài khoản? Hành động này không thể hoàn tác.')) {
      try {
        await userService.deleteAccount();
        authService.logout();
        toast.success('Tài khoản đã được xóa thành công');
        navigate('/');
      } catch (error) {
        toast.error(error.response?.data?.message || 'Xóa tài khoản thất bại');
      }
    }
  };

  if (loading || !user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-6 px-8 text-white">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Hồ Sơ Cá Nhân</h1>
              {!editMode && (
                <button
                  onClick={() => setEditMode(true)}
                  className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-200"
                >
                  Chỉnh sửa
                </button>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="md:flex">
            {/* Avatar Section */}
            <div className="md:w-1/3 p-8 border-r border-gray-200">
              <div className="flex flex-col items-center">
                <div className="relative mb-6">
                  <img
                    src={avatarPreview}
                    alt="Avatar"
                    className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  {editMode && (
                    <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 transition duration-200">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarChange}
                        className="hidden"
                      />
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                    </label>
                  )}
                </div>

                {editMode ? (
                  <div className="w-full space-y-4">
                    <button
                      type="submit"
                      form="profileForm"
                      disabled={loading}
                      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 disabled:opacity-70"
                    >
                      {loading ? 'Đang lưu...' : 'Lưu thay đổi'}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setEditMode(false);
                        setAvatar(null);
                        setAvatarPreview(user.avatar || '/images/default-avatar.jpg');
                      }}
                      className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition duration-200"
                    >
                      Hủy bỏ
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                    <p className="text-gray-600">{user.email}</p>
                    <p className="text-gray-500 text-sm mt-2">
                      Thành viên từ: {new Date(user.createdAt).toLocaleDateString('vi-VN')}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Info Section */}
            <div className="md:w-2/3 p-8">
              {editMode ? (
                <form id="profileForm" onSubmit={handleSubmit} className="space-y-6">
                  {/* Input fields when in edit mode */}
                </form>
              ) : (
                <div className="space-y-6">
                  {/* User info display */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Thông tin cá nhân</h3>
                    {/* Display name, email, phone, address */}
                  </div>

                  {/* Change Password Button */}
                  <div className="pt-4">
                    <button
                      onClick={() => setShowPasswordModal(true)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      Đổi mật khẩu
                    </button>
                  </div>

                  {/* Delete Account */}
                  <div className="pt-6 border-t border-gray-200">
                    <button
                      onClick={handleDeleteAccount}
                      className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Xóa tài khoản
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Change Password Modal */}
      {showPasswordModal && (
        <ChangePasswordModal
          isOpen={showPasswordModal}
          onClose={() => setShowPasswordModal(false)}
        />
      )}
    </div>
  );
}
