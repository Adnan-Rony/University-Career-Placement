import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createApply, fetchAllApplicationBySingleCompany } from "../api/application.js";




export const UseCreateApply = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createApply,
    onSuccess: () => {
      queryClient.invalidateQueries(['application']); 
    },
  });
};


export const UseMyCompanyApplications = () => {
  return useQuery({
    queryKey: ['all-applications'],
    queryFn: fetchAllApplicationBySingleCompany,
  });
};