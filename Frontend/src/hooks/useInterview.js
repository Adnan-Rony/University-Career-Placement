import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CreateInterviewShedule, fetchInterview } from "../api/interview.js";


export const UseInterviewSheddule = () => {
  return useQuery({
    queryKey: ['interview'],
    queryFn: fetchInterview,
  });
};


export const UseCreateInterviewShedule = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CreateInterviewShedule,
    onSuccess: () => {
      queryClient.invalidateQueries(['interview']); 
    },
  });
};