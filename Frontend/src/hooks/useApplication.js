import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createApply } from "../api/application.js";




export const UseCreateApply = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createApply,
    onSuccess: () => {
      queryClient.invalidateQueries(['application']); 
    },
  });
};