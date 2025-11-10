import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createResume } from "../api/resumeBuilder";

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
