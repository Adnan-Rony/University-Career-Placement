import { useMutation } from "@tanstack/react-query";
import { UpdateProfile } from "../api/profile";


export const useUpdateProfile = () => {
    return useMutation({
        mutationFn:UpdateProfile ,
    });
};
