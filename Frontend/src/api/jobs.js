
import axiosInstance from "./axiosInstance.js";


export const fetchJobs = async () => {
  const res = await axiosInstance.get('/job');
  return res.data;
};
export const fetchSingleJobs = async (id) => {
  const res = await axiosInstance.get(`/job/${id}`);
  return res.data;
};


export const createJob = async (jobData) => {
  const res = await axiosInstance.post('/job', jobData);
  return res.data;
};


export const updateJob = async ({ id, jobData }) => {
  const res = await axiosInstance.put(`/job/${id}`, jobData);
  return res.data;
};


export const deleteJob = async (id) => {
  const res = await axiosInstance.delete(`/job/${id}`);
  return res.data;
};


