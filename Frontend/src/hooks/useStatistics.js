

import { useQuery } from "@tanstack/react-query"
import { fetchAdminStatistics, fetchEmployerStatistics, fetchUserStatistics } from "../api/Statistics"


export const useUserStatistics=()=>{
    return useQuery({
        queryKey:['statistics']
        ,
        queryFn:fetchUserStatistics
    })
}
export const useEmployerStatistics=()=>{
    return useQuery({
        queryKey:['statistics']
        ,
        queryFn:fetchEmployerStatistics
    })
}


export const useAdminStatistics = () => {
  return useQuery({
    queryKey: ["adminStatistics"],
    queryFn: fetchAdminStatistics,
    
  });
};