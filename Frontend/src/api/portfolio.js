import axiosInstance from "./axiosInstance.js";

export const fetchMyPortfolio = async () => {
 try {
   const res = await axiosInstance.get("/portfolio/my");
  return res.data;
 } catch (err) {
  if (err.response && err.response.status === 404) {
      
      return null;
    }
 }
};


export const fetchPublicPortfolio = async (slug) => {
  try {
    const res = await axiosInstance.get(`/portfolio/public/${slug}`);
    return res.data; 
  } catch (err) {
    if (err.response && err.response.status === 404) {
      return null; 
    }
    throw err; 
  }
};


export const createportfolio = async (portfoliodata) => {
  try {
    const res = await axiosInstance.post("/portfolio/create", portfoliodata);
    console.log("Portfolio created successfully");
    return res.data;
  } catch (error) {
    console.log("Failed to create Portfolio ");
    console.error(error);
    throw error;
  }
};
