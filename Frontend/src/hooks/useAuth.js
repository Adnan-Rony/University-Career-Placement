import { useQueryClient } from "@tanstack/react-query";
import { LoginUser, LogoutUser, RegisterUser } from "../api/auth.js";
import { useMutation } from './../../node_modules/@tanstack/react-query/src/useMutation';



export const UseLoginUser = () => { 
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: LoginUser, 
    onSuccess: () => {
      queryClient.invalidateQueries(['user']); // Triggers refetch
    },
  });
};

//registation
export const UseRegister=()=>{
        const QueryClient=useQueryClient();

        return useMutation
}


//Logout
export const Uselogout = () => {
  return useMutation({
    mutationFn: LogoutUser,
  });
};