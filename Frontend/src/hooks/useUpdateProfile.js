import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { UpdateProfile } from "../api/profile";

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: UpdateProfile,
    onSuccess: async () => {
        await queryClient.invalidateQueries({queryKey:["user"]})
    },
  });
};
