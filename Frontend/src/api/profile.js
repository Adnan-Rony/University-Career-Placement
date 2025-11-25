import toast from "react-hot-toast";
import axiosInstance from "./axiosInstance"

export const UpdateProfile=async(data)=>{
     try{
    const response = await axiosInstance.put('/user/profile/update', data);
    
    toast.success("Profile Updated Successfully")
    return response.data;
  } 
  catch (error){
    console.error("Failed to update profile", error.response?.data || error.message);
    toast.error("Failed")
  }
}