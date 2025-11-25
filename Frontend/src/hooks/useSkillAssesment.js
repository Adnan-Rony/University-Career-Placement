import { useMutation, useQuery } from "@tanstack/react-query";
import { createAssessment, createSkill, getAllAssesmentBySkillId, getAllSkillAssessments,
   getAssessmentQuestions,
   startSkillAssessment, 
   submitAnswers,
   submitSkillAssessment} from "../api/skillAssesment";
import Swal from "sweetalert2";

//Create Skill

export const useCreateSkill = () => {
  return useMutation({
    mutationFn: (data) => createSkill(data),
    onSuccess: (res) => {
      console.log("Skill Created Successfully", res);
    },
    onError: (err) => {
      console.error("Failed to Create Skill", err);
    },
  });
};

// //Create Skill Assesment(Add quistions)
export const useCreateAssessment = () => {
  return useMutation({
    mutationFn: (data) => createAssessment(data),
    onSuccess: (res) => {
      console.log("Skill Created Successfully", res);
            Swal.fire({
        title: "Success!",
        text: "Assessment created successfully ",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#7e22ce", 
      });
    },
    onError: (err) => {
      console.error("Failed to Create Skill", err);
    },
  });
};


//Get skills(Category)
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
export const useSubmitSkillAssessment = () => {
  return useMutation({
    mutationFn: ({ attemptId}) =>
      submitSkillAssessment(attemptId),

    onSuccess: (data) => {
      console.log("Assesment Submission Complete", data)
    },

    onError: (error) => {
      console.error(
        "Error submitting Assesmetn:",
        error.response?.data || error.message
      )
    }
  })
}