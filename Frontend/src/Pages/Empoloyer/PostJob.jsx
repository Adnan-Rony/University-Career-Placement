import React from 'react'
import { SectionTitle } from '../../Components/Shared/SectionTitle'
import { useForm } from 'react-hook-form'

export const PostJob = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        const jobDetails = {
          companyName: data.companyName,
          position: data.position,
          category: data.category,
          jobType: data.jobType,
          experience: data.experience,
          postedDate: data.postedDate,
          lastDateToApply: data.lastDateToApply,
          closeDate: data.closeDate,
          salaryFrom: data.salaryFrom,
          salaryTo: data.salaryTo,
          city: data.city,
          state: data.state,
          country: data.country,
          educationLevel: data.educationLevel,
          description: data.description,
          status: data.status,
        };
    
        console.log('Job Details:', jobDetails);
      }
  return (
    <div className='bg-background container mx-auto my-10 p-4 rounded-lg shadow-lg'>
        <SectionTitle title={'Post Job'}></SectionTitle>
        <div>
        <form onSubmit={handleSubmit(onSubmit)} className='p-4'>
       



          <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 '>

               {/* Company Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Company Name</label>
            <input
              type="text"
              placeholder="Company Name"
              {...register("companyName", { required: true })}
              className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
            />
            {errors.companyName && <span>This field is required</span>}
          </div>

          {/* Job Position */}
          <div>
            <label className="block text-sm font-medium mb-1">Position</label>
            <input
              type="text"
              placeholder="Position"
              {...register("position", { required: true })}
              className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
            />
            {errors.position && <span>This field is required</span>}
          </div>
            
          {/* Job Category */}
          <div>
            <label className="block text-sm font-medium mb-1">Job Category</label>
            <input
              type="text"
              placeholder="Job Category"
              {...register("category", { required: true })}
              className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
            />
            {errors.category && <span>This field is required</span>}
          </div>

          {/* Job Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Job Type</label>
            <input
              type="text"
              placeholder="Job Type"
              {...register("jobType", { required: true })}
              className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
            />
            {errors.jobType && <span>This field is required</span>}
          </div>

          {/* Select Experience */}
          <div>
            <label className="block text-sm font-medium mb-1">Select Experience</label>
            <select {...register("experience", { required: true })} className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none">
              <option value="">Select Experience</option>
              <option value="Entry Level">Entry Level</option>
              <option value="Mid Level">Mid Level</option>
              <option value="Senior Level">Senior Level</option>
            </select>
            {errors.experience && <span>This field is required</span>}
          </div>

          {/* Posted Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Posted Date</label>
            <input
              type="date"
              {...register("postedDate", { required: true })}
              className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
            />
            {errors.postedDate && <span>This field is required</span>}
          </div>

          {/* Last Date To Apply */}
          <div>
            <label className="block text-sm font-medium mb-1">Last Date To Apply</label>
            <input
              type="date"
              {...register("lastDateToApply", { required: true })}
              className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
            />
            {errors.lastDateToApply && <span>This field is required</span>}
          </div>

          {/* Close Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Close Date</label>
            <input
              type="date"
              {...register("closeDate", { required: true })}
              className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
            />
            {errors.closeDate && <span>This field is required</span>}
          </div>

          {/* Salary From */}
          <div>
            <label className="block text-sm font-medium mb-1">Salary From</label>
            <input
              type="number"
              placeholder="Salary From"
              {...register("salaryFrom", { required: true })}
              className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
            />
            {errors.salaryFrom && <span>This field is required</span>}
          </div>

          {/* Salary To */}
          <div>
            <label className="block text-sm font-medium mb-1">Salary To</label>
            <input
              type="number"
              placeholder="Salary To"
              {...register("salaryTo", { required: true })}
              className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
            />
            {errors.salaryTo && <span>This field is required</span>}
          </div>

          {/* Enter City */}
          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <input
              type="text"
              placeholder="Enter City"
              {...register("city", { required: true })}
              className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
            />
            {errors.city && <span>This field is required</span>}
          </div>

          {/* Enter State */}
          <div>
            <label className="block text-sm font-medium mb-1">State</label>
            <input
              type="text"
              placeholder="Enter State"
              {...register("state", { required: true })}
              className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
            />
            {errors.state && <span>This field is required</span>}
          </div>

          {/* Enter Country */}
          <div>
            <label className="block text-sm font-medium mb-1">Country</label>
            <input
              type="text"
              placeholder="Enter Country"
              {...register("country", { required: true })}
              className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
            />
            {errors.country && <span>This field is required</span>}
          </div>

          {/* Enter Education Level */}
          <div>
            <label className="block text-sm font-medium mb-1">Education Level</label>
            <input
              type="text"
              placeholder="Enter Education Level"
              {...register("educationLevel", { required: true })}
              className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
            />
            {errors.educationLevel && <span>This field is required</span>}
          </div>

          {/* Job Description */}
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea rows="5"
              placeholder="Enter Job Description"
              {...register("description", { required: true })}
              className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
            />
            {errors.description && <span>This field is required</span>}
          </div>

{/* Status */}
<div className="mb-4">
  <label className="block text-sm font-medium mb-2">Status:</label>
  <div className="flex gap-6">
    <div className="flex items-center gap-2">
      <input
        type="radio"
        {...register("status", { required: true })}
        name="status"
         value="Active"
        className="radio "
        defaultChecked
      />
      <p className="text-sm">Active</p>
    </div>
    <div className="flex items-center gap-2">
      <input
        type="radio"
        name="status"
         value="Inactive"
        className="radio "
        {...register("status", { required: true })}
      />
          {errors.status && <span>This field is required</span>}
      <p className="text-sm">Inactive</p>
    </div>
  </div>
</div>

          </div>


          {/* Submit Button */}
         <div className='mt-3'>
         <input className='btn bg-r-primary text-white hover:bg-r-accent' type="submit" />
         </div>
        </form>


        <div>
       
        </div>
            
        </div>
    </div>
  )
}
