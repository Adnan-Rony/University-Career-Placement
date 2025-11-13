import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllAssesmentBySkillId, getAllSkillAssessments,
   startSkillAssessment } from "../api/skillAssesment";

export const useAllSkillAssessments = () => {
  return useQuery({
    queryKey: ["skillAssessments"],
    queryFn: getAllSkillAssessments,
  });
};


// Fetch skill assessment by skillId
export const useAssessmentBySkillId = (skillId) => {
  return useQuery({
    queryKey: ["skillAssessments", skillId],
    queryFn: () => getAllAssesmentBySkillId(skillId),
   
  });
};

// Hook to start assessment
export const useStartSkillAssessment = () => {
  return useMutation({
    mutationFn: ({ assessmentId, userId }) =>
      startSkillAssessment(assessmentId, userId),
    onSuccess: (data) => {
      console.log('Assessment started successfully:', data)
    },
    onError: (error) => {
      console.error('Error starting assessment:', error.response?.data || error.message)
    }
  })
}