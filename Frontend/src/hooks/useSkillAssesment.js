import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllAssesmentBySkillId, getAllSkillAssessments,
   getAssessmentQuestions,
   startSkillAssessment, 
   submitAnswers} from "../api/skillAssesment";

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

// Hook to fetch assessment questions
export const useGetAssessmentQuestions = (attemptId) => {
  return useQuery({
    queryKey: ['assessmentQuestions', attemptId],
    queryFn: () => getAssessmentQuestions(attemptId),
    enabled: !!attemptId,
  
  })
}

// Hook to submit assessment answers
export const useSubmitSkillAssessmentAnswers = () => {
  return useMutation({
    mutationFn: ({ attemptId, answers }) =>
      submitAnswers(attemptId, answers),

    onSuccess: (data) => {
      console.log("Answers submitted successfully:", data)
    },

    onError: (error) => {
      console.error(
        "Error submitting answers:",
        error.response?.data || error.message
      )
    }
  })
}