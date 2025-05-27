import axiosInstance from "./axiosInstance.js";


export const LoginUser = async (user) => {
  const res = await axiosInstance.post('/user/login', user);
  return res.data;
};


export const RegisterUser = async (userData) => {
  const res = await axiosInstance.post('/user/register', userData);
  return res.data;
};


export const LogoutUser = async () => {
  try {
    const res = await axiosInstance.post('/user/logout');
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Logout failed');
  }
};


export const CurrentUser = async () => {
  try {
    const res = await axiosInstance.get('/user/me');
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Fetching user failed');
  }
};
