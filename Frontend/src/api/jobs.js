
import axiosInstance from "./axiosInstance.js";


export const fetchJobs = async () => {
  const res = await axiosInstance.get('/job');
  return res.data;
};

export const fetchRelatedJobs = async (jobId) => {
  try {
    const res = await axiosInstance.get(`/job/recommendations/${jobId}`);
    console.log("Fetched Related Jobs:", res.data);
    if (!res.data.success) {
      console.warn("Related Jobs Error:", res.data.message);
      return []; // Return empty array on error
    }
    return res.data.data || []; // Extract jobs array or return empty
  } catch (error) {
    console.error("Error fetching related jobs:", error);
    return []; // Return empty array to prevent crashes
  }
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


export const fetchSearchJobs = async (title, location) => {
  const res = await axiosInstance.get("/job/search", {
    params: {
      title,
      location,
    },
  });
  return res.data.jobs; 
}


