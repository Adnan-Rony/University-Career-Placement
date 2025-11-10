import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createResume, deleteResume, getUserResumes } from "../api/resumeBuilder";

export const useCreateResume = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createResume,
    onSuccess: (data) => {
      console.log("Resume created successfully:", data);
      queryClient.invalidateQueries({ queryKey: ["resumes"] }); 
    },
    onError: (error) => {
      console.error("Failed to create resume:", error.response?.data || error.message);
    },
  });
};

// Hook: fetch all resumes for a user
export const useUserResumes = (userId) => {
  return useQuery({
    queryKey: ["resumes", userId],
    queryFn: () => getUserResumes(userId),
    enabled: !!userId,
  });
};

// Hook: delete a resume
export const useDeleteResume = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteResume,
    onSuccess: (_, resumeId) => {
     
      queryClient.invalidateQueries({ queryKey: ["resumes"] });
      console.log("Resume deleted successfully:", resumeId);
    },
    onError: (error) => {
      console.error("Failed to delete resume:", error.response?.data || error.message);
    },
  });
};
