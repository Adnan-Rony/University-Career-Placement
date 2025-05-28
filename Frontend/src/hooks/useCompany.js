import { useQuery } from "@tanstack/react-query";
import { fetchMyCompany } from "../api/company.js";

export const UseMyCompany = () => {
  return useQuery({
    queryKey: ['company'],
    queryFn: fetchMyCompany,
  });
};