import { useMutation,  useQuery, useQueryClient } from "@tanstack/react-query"
import { createportfolio, fetchMyPortfolio } from "../api/portfolio.js";



export const UseMyPortfolio = () => {
  return useQuery({
    queryKey: ['portfolio'],
    queryFn: fetchMyPortfolio,
  });
};







export const UseCreatePortfolio=()=>{
 const queryClient = useQueryClient(); 


    return useMutation({
        mutationFn:createportfolio,
        onSuccess:()=>{
            queryClient.invalidateQueries(['portfolio'])
        }
    })
}