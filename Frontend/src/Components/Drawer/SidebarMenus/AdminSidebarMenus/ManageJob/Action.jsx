import React from "react";
import { UseupdateJobStatus } from "../../../../../hooks/useAdmin";
import { Loader } from "lucide-react";
import Loading from "../../../../loading/Loading";

export const Action = ({id}) => {
     const {mutate,isPending}=UseupdateJobStatus()
    
     const handleapprove=()=>{
        console.log(id);
     mutate(
        { jobId: id, status: "approved" });
         
    }
     const handleReject=()=>{
        console.log(id);
  mutate(
        { jobId: id, status: "rejected" });
         
    }

    if(isPending){
        return <Loading/>
    }
  return (
    <td className="flex gap-2">
      <button className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded hover:bg-blue-200">
        View
      </button>
      <button 
      onClick={handleapprove}
      className="px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded hover:bg-green-200">
        Approve
      </button>
      <button
       onClick={handleReject}
      className="px-3 py-1 text-sm font-medium text-red-700 bg-red-100 rounded hover:bg-red-200">
        Reject
      </button>
    </td>
  );
};
