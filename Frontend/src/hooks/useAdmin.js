import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteSingleCompanyByAdmin, deletesingleJobsByAdmin, deleteUserByAdmin, fetchAdminAllApplication, fetchAdminAllCompany, fetchAdminAllJobs, fetchAdminAllUsers, fetchSingleCompanyByAdmin, fetchSingleJobsByAdmin, UpdateSingleCompanyByAdmin } from "../api/admin.js";
import { updateJobStatus } from "../api/jobs.js";


//user

export const UseAdminAllUser = () => {
  return useQuery({
    queryKey: ['admin-user'],
    queryFn: fetchAdminAllUsers,
  });
};


export const UseAdminDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUserByAdmin,
    onSuccess: () => {
      queryClient.invalidateQueries(['admin-user']); // refetch job list
    },
  });
};


//jobs

export const UseFetchAllJobByAdmin = () => {
  return useQuery({
    queryKey: ['admin-job'],
    queryFn: fetchAdminAllJobs,
  });
};

export const UseFetchSingleJobByAdmin = (id) => {
  return useQuery({
    queryKey: ["admin-job", id],
    queryFn: () => fetchSingleJobsByAdmin(id),
    enabled: !!id,
  
    select: (data) => data.job,
  });
};


export const useDeleteJobByAdmin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletesingleJobsByAdmin,
    onSuccess: () => {
      queryClient.invalidateQueries(['admin-job']);
    },
  });
};



//company

export const UsefetchAllCompanyByAdmin = () => {
  return useQuery({
    queryKey: ['admin-company'],
    queryFn: fetchAdminAllCompany,
  });
};

export const UseFetchSingleCompanyByAdmin = (id) => {
  return useQuery({
    queryKey: ["admin-company", id],
    queryFn: () => fetchSingleCompanyByAdmin(id),
    enabled: !!id,
  
    select: (data) => data.company,
  });
};


// Delete a individual company

export const UseDeleteSingleCompanyByAdmin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteSingleCompanyByAdmin,
    onSuccess: () => {
      queryClient.invalidateQueries(['admin-company']);
    },
  });
};
export const UseUpdateSingleCompanyByAdmin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: UpdateSingleCompanyByAdmin,
    onSuccess: () => {
      queryClient.invalidateQueries(['admin-company']);
    },
  });
};



//application
export const UseFetchAllApplicationByAdmin = () => {
  return useQuery({
    queryKey: ['admin-application'],
    queryFn: fetchAdminAllApplication,
  });
};

//Approve-Reject Jobs

export const UseupdateJobStatus=()=>{
   const queryClient = useQueryClient();

   return useMutation({
    mutationFn:(payload)=>updateJobStatus(payload),
      onSuccess: () => {
      queryClient.invalidateQueries(["job"]); // refetch jobs after update
    },
   })
}