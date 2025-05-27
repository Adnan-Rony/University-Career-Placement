import axiosInstance from "./axiosInstance.js";


export const fetchAuth = async () => {
  const res = await axiosInstance.get('/user');
  return res.data;
};
