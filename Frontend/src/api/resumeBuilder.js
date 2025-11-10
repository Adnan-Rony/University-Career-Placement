import axiosInstance from "./axiosInstance"

export const createResume=async(resumeData)=>{
    try {
        const response=await axiosInstance.post('/resumebuilder',resumeData)
        return response.data;
    } catch (error) {
        console.error('Error Creating New Resume')
        throw error;
    }
}