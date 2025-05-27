import axiosInstance from "./axiosInstance.js";


export const fetchCompany = async () => {
  const res = await axiosInstance.get('/company');
  return res.data;
};
