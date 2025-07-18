import axiosInstance from "./axiosInstance.js";


export const fetchApplication = async () => {
  const res = await axiosInstance.get('/application');
  return res.data;
};
export const fetchJobSeekerApplication = async () => {
  const res = await axiosInstance.get('/application/my');
  return res.data;
};


export const fetchAllApplicationBySingleCompany = async () => {
  const res = await axiosInstance.get('/application/all-applications');
  return res.data;
};



export const createApply = async (data) => {
  const res = await axiosInstance.post('/application/apply',data);
  return res.data;
};
