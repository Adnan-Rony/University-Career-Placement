import axios from 'axios';

const axiosInstance = axios.create({

  baseURL: 'https://smartjob-backendserver.vercel.app/api/v1',
  withCredentials: true,
});

export default axiosInstance;
