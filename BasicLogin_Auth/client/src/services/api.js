// Local API functions
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const apiCall = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return { success: true, ...data };
  } catch (error) {
    return { success: false, message: error.message || 'Request failed' };
  }
};

export const registerUser = async (userData) => {
  return apiCall('/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  });
};

export const getUserProfile = async (token) => {
  return apiCall('/user', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateUserProfile = async (token, userData) => {
  return apiCall('/user/update', {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = async (credentials) => {
  return apiCall('/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
};

export const sendVerificationEmail = async (email) => {
  return apiCall('/verify-email/send', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
};

export const verifyEmail = async (token) => {
  return apiCall('/verify-email/confirm', {
    method: 'POST',
    body: JSON.stringify({ token }),
  });
};

export const requestPasswordReset = async (email) => {
  return apiCall('/password-reset/request', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
};

export const resetPassword = async (token, newPassword) => {
  return apiCall('/password-reset', {
    method: 'POST',
    body: JSON.stringify({ token, password: newPassword }),
  });
};

export const changePassword = async (token, oldPassword, newPassword) => {
  return apiCall('/user/change-password', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ oldPassword, newPassword }),
  });
};

export const googleLogin = async () => {
  return { success: false, message: 'Google login is not configured yet' };
};

export const facebookLogin = async () => {
  return { success: false, message: 'Facebook login is not configured yet' };
};

