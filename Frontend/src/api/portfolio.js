import axiosInstance from "./axiosInstance.js"


export const fetchMyPortfolio = async () => {
  const res = await axiosInstance.get('/portfolio/my');
  return res.data;
};

export const createportfolio=async (portfoliodata)=>{
    const res =await axiosInstance.post('/portfolio/create',portfoliodata);
    return res.data
}