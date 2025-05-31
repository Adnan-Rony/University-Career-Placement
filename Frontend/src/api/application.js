import axiosInstance from "./axiosInstance.js";


export const fetchApplication = async () => {
  const res = await axiosInstance.get('/application');
  return res.data;
};



export const createApply = async (data) => {
  const res = await axiosInstance.post('/application/apply',data);
  return res.data;
};
