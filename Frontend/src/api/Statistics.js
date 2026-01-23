import axiosInstance from "./axiosInstance";

export const fetchUserStatistics = async () => {
  try {
    const res =await axiosInstance.get("/statistics/userStat");
 
    return res.data;
  } catch (error) {
    console.error("Failed to fetch user statistics:", error);
    throw error;
  }
};
export const fetchEmployerStatistics = async () => {
  try {
    const res =await axiosInstance.get("/statistics/employerStat");
 
    return res.data;
  } catch (error) {
    console.error("EMployer to fetch user statistics:", error);
    throw error;
  }
};



//admin


export const fetchAdminStatistics = async () => {
  try {
    const res = await axiosInstance.get("/statistics/adminStat");
    return res.data;
  } catch (error) {
    console.error("Failed to fetch admin statistics:", error);
    throw error;
  }
};