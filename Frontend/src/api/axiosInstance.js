import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'http://localhost:3002/api/v1',
  baseURL: 'https://smartjob-backendserver.vercel.app/api/v1',
  withCredentials: true,
});

export default axiosInstance;
