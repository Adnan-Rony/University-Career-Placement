import axiosInstance from "./axiosInstance";
//Create Skill 
export const createSkill=async(data)=>{
try {
  const res=await axiosInstance.post('/skillAssesment',data)
  return res.data
} catch (error) {
  console.error('Error Creating Skill')
  throw error
}
}
// //Create Skill Assesment(Add quistions)

export const createAssessment=async(data)=>{
try {
  const res=await axiosInstance.post('/skillAssesment/createassesment',data)
  return res.data
} catch (error) {
  console.error('Error Creating Assessment')
  throw error
}
}



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

    if (!res.data.success) {
      console.error("success false");
      return [];
    }
    return res.data?.data;
  } catch (error) {
    console.error(
      "Error fetching assessment by skill ID:",
      error.response?.data || error.message
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
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error starting assessment:",
      error.response?.data || error.message
    );
    throw error;
  }
};
//  get assessment questions
export const getAssessmentQuestions = async (attemptId) => {
  try {
    const response = await axiosInstance.get(
      `/skillAssesment/attempts/${attemptId}/questions`
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error fetching questions:",
      error.response?.data || error.message
    );
    throw error;
  }
};

//Submit Your Answers

export const submitAnswers = async (attemptId, answers) => {
  try {
    const res = await axiosInstance.post(
      `/skillAssesment/attempts/${attemptId}/answers`,
      { answers }
    );
    return res.data;
  } catch (error) {
    console.log("Error Submit the answers", error.message);
    throw error;
  }
};


export const submitSkillAssessment = async (attemptId) => {
  const response = await axiosInstance.post(
    `/skillAssesment/attempts/${attemptId}/submit`
  );
  return response.data;
};