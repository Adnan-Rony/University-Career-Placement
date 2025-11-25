import axiosInstance from "./axiosInstance.js";

export const fetchMyPortfolio = async () => {
  const res = await axiosInstance.get("/portfolio/my");
  return res.data;
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
