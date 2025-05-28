import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { createJob, deleteJob, fetchJobs, updateJob } from "../api/jobs.js";



export const UseJobs = () => {
  return useQuery({
    queryKey: ['job'],
    queryFn: fetchJobs,
  });
};



export const UseCreateJob = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createJob,
    onSuccess: () => {
      queryClient.invalidateQueries(['job']); // refetch job list
    },
  });
};



export const UseUpdateJob = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateJob,
    onSuccess: () => {
      queryClient.invalidateQueries(['job']);
    },
  });
};


export const UseDeleteJob = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteJob,
    onSuccess: () => {
      queryClient.invalidateQueries(['job']);
    },
  });
};


