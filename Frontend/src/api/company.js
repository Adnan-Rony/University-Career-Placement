
import axiosInstance from "./axiosInstance.js";


export const fetchCompany = async () => {
  const res = await axiosInstance.get('/company');
  return res.data;
};
export const fetchMyCompany = async () => {
  const res = await axiosInstance.get('/company/my-company');
  return res.data;
};




export const CreateMyCompany = async (companyData) => {
  const res = await axiosInstance.post('/company/createcompany',companyData);
  return res.data;
};



