import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CreateMyCompany, fetchMyCompany } from "../api/company.js";

export const UseMyCompany = () => {
  return useQuery({
    queryKey: ['company'],
    queryFn: fetchMyCompany,
  });
};


export const UseCreateCompany = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CreateMyCompany,
    onSuccess: () => {
      queryClient.invalidateQueries(['company']); 
    },
  });
};