import axiosInstance from "./axiosInstance";

// Fetch all skill assessments
export const getAllSkillAssessments = async () => {
  try {
    const response = await axiosInstance.get(`/skillAssesment`);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching skill assessments:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Fetch skill assessment by skillId

export const getAllAssesmentBySkillId = async (skillId) => {
  try {
    console.log(skillId);
    const res = await axiosInstance.get(`/skillAssesment/skills/${skillId}`);

    if (!res.data.success ) {
      console.error("success false");
      return [];
    }
    return res.data?.data;
  } catch (error) {
    console.error(
      "Error fetching assessment by skill ID:",error.response?.data || error.message
    );
    throw error;
  }
};
//Start attempt
export const startSkillAssessment = async (assessmentId, userId) => {
try {
    const response = await axiosInstance.post(
    `/skillAssesment/assessments/${assessmentId}/start`,
    { userId }
  )
  return response.data
} catch (error) {
 console.error('Error starting assessment:', error.response?.data || error.message)
    throw error
}
}
