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


// Get all resumes for a user
export const getUserResumes = async (userId) => {
  try {
    const response = await axiosInstance.get(`/resumebuilder/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user resumes:", error.response?.data || error.message);
    throw error;
  }
};

// Delete a resume by ID
export const deleteResume = async (resumeId) => {
  try {
    const response = await axiosInstance.delete(`/resumebuilder/${resumeId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting resume:", error.response?.data || error.message);
    throw error;
  }
};