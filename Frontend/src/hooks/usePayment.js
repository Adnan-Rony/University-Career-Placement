import { useMutation, useQueryClient } from "@tanstack/react-query";
import { paymentfnc } from "../api/payment";



export const usePayment=()=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:paymentfnc,
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['Job']})
        }
    })
}