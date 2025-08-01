import React from 'react'
import { Link } from 'react-router'
import { UseDeleteJob } from '../../../../../hooks/useJobs'
import toast from 'react-hot-toast'

export const PostedJobActions = ({job}) => {
    const {mutate,isPending}=UseDeleteJob()
    const handledelete=(id)=>{
      console.log(id);
      mutate(id)
      toast.success("Job Deleted Successfully")
    }
  return (
      <td className="flex gap-2">
                  <Link to={`/job/details/${job._id}`} className="btn btn-xs bg-r-primary text-white hover:bg-r-primary/90 border-none">
                    View
                  </Link>
                  <button className="btn btn-xs bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border border-yellow-300">
                    Edit
                  </button>
                  <button 
                  onClick={()=>handledelete(job._id)}
                  className="btn btn-xs bg-red-100 text-red-700 hover:bg-red-200 border border-red-300">
                  
                    {isPending?"Deleting...":"Delete"}
                  </button>
                </td>
  )
}
