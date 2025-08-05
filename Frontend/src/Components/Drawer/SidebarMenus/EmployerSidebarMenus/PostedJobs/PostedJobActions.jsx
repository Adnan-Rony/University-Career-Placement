import React, { useState } from 'react'
import { Link } from 'react-router'
import { UseDeleteJob } from '../../../../../hooks/useJobs'
import toast from 'react-hot-toast'

export const PostedJobActions = ({job}) => {
    const {mutate,isPending}=UseDeleteJob()
     const [openModal, setOpenModal] = useState(false);
    const handledelete=(id)=>{
      console.log(id);
      mutate(id)
      toast.success("Job Deleted Successfully")
    }
    const handleEdit=(id)=>{
document.getElementById(`modal-${id}`).showModal()
    }
  return (
      <td className="flex gap-2">
                  <Link to={`/job/details/${job._id}`} className="btn btn-xs bg-r-primary text-white hover:bg-r-primary/90 border-none">
                    View
                  </Link>
                  <button
                  onClick={()=>handleEdit(job._id)}
                  className="btn btn-xs bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border border-yellow-300">
                    Edit
                  </button>
                  <button 
                  onClick={()=>handledelete(job._id)}
                  className="btn btn-xs bg-red-100 text-red-700 hover:bg-red-200 border border-red-300">
                  
                    {isPending?"Deleting...":"Delete"}
                  </button>
                  <UpdateJobModal id={job._id}/>
                </td>
  )
}


 const  UpdateJobModal=({id})=>{
    return(
        <div>
<dialog id={`modal-${id}`} className="modal">
  <div className="modal-box">
    <form >
        <input type="text" className='input' />
        <button className='btn btn-warning' type='submit'>submit</button>
      {/* if there is a button in form, it will close the modal */}
<button
            type="button"
            onClick={() => document.getElementById(`modal-${id}`).close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
    </form>
    <h3 className="font-bold text-lg">Hello! {id}</h3>
    
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
  </div>
</dialog>
        </div>
    )
 }
