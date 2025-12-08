import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  //  baseURL: 'https://smartjob-backendserver.vercel.app/api/v1',     //Production
  withCredentials: true,
});

export default axiosInstance;
