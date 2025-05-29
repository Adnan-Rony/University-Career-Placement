import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { CurrentUser, LoginUser, LogoutUser, RegisterUser } from "../api/auth.js";



export const UseLoginUser = () => { 
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: LoginUser, 
    onSuccess: () => {
      queryClient.invalidateQueries(['user']); 
    },
  });
};

//registation
export const UseRegister=()=>{
        const queryClient=useQueryClient();

        return useMutation({
             mutationFn: RegisterUser, 
    onSuccess: () => {
      queryClient.invalidateQueries(['user']); 
    },
        })
}


//Logout

export const useLogout=()=>{
        const queryClient=useQueryClient();

        return useMutation({
             mutationFn: LogoutUser, 
    onSuccess: () => {
      queryClient.invalidateQueries(['user']); 
    },
        })
}

// Fetch User Informations


export const useCurrentUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: CurrentUser,
  });
};

