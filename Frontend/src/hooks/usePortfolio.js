import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createportfolio, fetchMyPortfolio } from "../api/portfolio.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export const UseMyPortfolio = () => {
  return useQuery({
    queryKey: ["portfolio"],
    queryFn: fetchMyPortfolio,
  });
};

export const UseCreatePortfolio = () => {
  const queryClient = useQueryClient();
const navigate=useNavigate()
  return useMutation({
    mutationFn: createportfolio,
    onSuccess: () => {
      toast.success("Portfolio Created Successfully");
      navigate("/select-portfolio-template")
      queryClient.invalidateQueries(["portfolio"]);
    },
  });
};
