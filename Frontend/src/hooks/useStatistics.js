// export const UseJobs = () => {
//   return useQuery({
//     queryKey: ['job'],
//     queryFn: fetchJobs,
//   });
// };

import { useQuery } from "@tanstack/react-query"
import { fetchUserStatistics } from "../api/Statistics"


export const useUserStatistics=()=>{
    return useQuery({
        queryKey:['statistics']
        ,
        queryFn:fetchUserStatistics
    })
}