

import { useQuery } from "@tanstack/react-query"
import { fetchEmployerStatistics, fetchUserStatistics } from "../api/Statistics"


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