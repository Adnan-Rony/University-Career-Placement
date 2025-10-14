import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  CurrentUser,
  LoginUser,
  LogoutUser,
  RegisterUser,
  UpdateProfileUser,
} from "../api/auth.js";

export const UseLoginUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: LoginUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
    },
  });
};

//registation
export const UseRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: RegisterUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
    },
  });
};

//Logout

export const UseLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: LogoutUser,
    onSuccess: () => {
      queryClient.removeQueries(["user"]);
    },
  });
};

// Fetch User Informations

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: CurrentUser,
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: UpdateProfileUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["currentUser"]);

      console.log("Profile updated successfully:", data);
    },
    onError: (error) => {
      console.error("Profile update error:", error.message);
    },
  });
};
