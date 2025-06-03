import axiosInstance from "./axiosInstance.js";


//user
export const fetchAdminAllUsers = async () => {
  const res = await axiosInstance.get('/admin/user');
  return res.data;
};


export const deleteUserByAdmin = async (id) => {
  const res = await axiosInstance.delete(`/admin/user/${id}`);
  return res.data;
};


//jobs

export const fetchAdminAllJobs = async () => {
  const res = await axiosInstance.get('/job');
  return res.data;
};

export const fetchSingleJobsByAdmin = async (id) => {
  const res = await axiosInstance.get(`/job/${id}`);
  return res.data;
};

export const deletesingleJobsByAdmin = async (id) => {
  const res = await axiosInstance.delete(`/job/${id}`);
  return res.data;
};



//company

export const fetchAdminAllCompany = async () => {
  const res = await axiosInstance.get('/company');
  return res.data;
};

export const fetchSingleCompanyByAdmin = async (id) => {
  const res = await axiosInstance.get(`/company/${id}`);
  return res.data;
};


// Delete Company
export const deleteSingleCompanyByAdmin = async (id) => {
  const res = await axiosInstance.delete(`/company/${id}`);
  return res.data;
};


//application
export const fetchAdminAllApplication = async () => {
  const res = await axiosInstance.get('/application');
  return res.data;
};