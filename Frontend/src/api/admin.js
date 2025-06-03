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
  const res = await axiosInstance.get('/admin/job');
  return res.data;
};

export const fetchSingleJobsByAdmin = async (id) => {
  const res = await axiosInstance.get(`/admin/job/${id}`);
  return res.data;
};

export const deletesingleJobsByAdmin = async (id) => {
  const res = await axiosInstance.delete(`/admin/job/${id}`);
  return res.data;
};



//company

export const fetchAdminAllCompany = async () => {
  const res = await axiosInstance.get('/admin/company');
  return res.data;
};

export const fetchSingleCompanyByAdmin = async (id) => {
  const res = await axiosInstance.get(`/admin/company/${id}`);
  return res.data;
};




export const UpdateSingleCompanyByAdmin = async ({ id, badge }) => {
  const res = await axiosInstance.put(`/admin/company/${id}`, {
    badges: badge,
  });
  return res.data;
};

export const deleteSingleCompanyByAdmin = async (id) => {
  const res = await axiosInstance.delete(`/admin/company/${id}`);
  return res.data;
};



//application
export const fetchAdminAllApplication = async () => {
  const res = await axiosInstance.get('/admin/application');
  return res.data;
};