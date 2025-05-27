import axiosInstance from "./axiosInstance.js";


export const fetchApplication = async () => {
  const res = await axiosInstance.get('/application');
  return res.data;
};
