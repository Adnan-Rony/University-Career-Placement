import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { createJob, deleteJob, fetchJobs, fetchRelatedJobs,  fetchSearchJobs,  fetchSingleJobs, fetchSingleMyJobs, updateJob } from "../api/jobs.js";



export const UseJobs = () => {
  return useQuery({
    queryKey: ['job'],
    queryFn: fetchJobs,
  });
};


export const UseMyJobs = () => {
  return useQuery({
    queryKey: ['my-jobs'],
    queryFn: fetchSingleMyJobs,
  });
};




export const UseRelatedJobs = (jobId) => {
  return useQuery({
    queryKey: ['relatedJobs', jobId],
    queryFn: () => fetchRelatedJobs(jobId), 
    enabled: !!jobId,
  });
};

export const UseFetchSingleJobById = (id) => {
  return useQuery({
    queryKey: ["job", id],
    queryFn: () => fetchSingleJobs(id),
    enabled: !!id,
  
    select: (data) => data.job,
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





export const UseSearchJobs = (title, location) => {
  return useQuery({
    queryKey: ["searchJobs", title, location],
    queryFn: () => fetchSearchJobs(title, location),
    enabled: !!title?.trim(),
  });
};

