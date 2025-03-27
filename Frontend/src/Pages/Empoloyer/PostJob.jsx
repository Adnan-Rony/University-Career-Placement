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
    <div className='bg-background container mx-auto'>
        <SectionTitle title={'Post Job'}></SectionTitle>
        <div>
        <form onSubmit={handleSubmit(onSubmit)} className='p-4'>
       



          <div className='grid grid-cols-2 gap-4 '>

               {/* Company Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Company Name</label>
            <input
              type="text"
              placeholder="Company Name"
              {...register("companyName", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.companyName && <span className='text-red-500'>This field is required</span>}
          </div>

          {/* Job Position */}
          <div>
            <label className="block text-sm font-medium mb-1">Position</label>
            <input
              type="text"
              placeholder="Position"
              {...register("position", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.position && <span className='text-red-500'>This field is required</span>}
          </div>
            
          {/* Job Category */}
          <div>
            <label className="block text-sm font-medium mb-1">Job Category</label>
            <input
              type="text"
              placeholder="Job Category"
              {...register("category", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.category && <span className='text-red-500'>This field is required</span>}
          </div>

          {/* Job Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Job Type</label>
            <input
              type="text"
              placeholder="Job Type"
              {...register("jobType", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.jobType && <span className='text-red-500'>This field is required</span>}
          </div>

          {/* Select Experience */}
          <div>
            <label className="block text-sm font-medium mb-1">Select Experience</label>
            <select {...register("experience", { required: true })} className="input input-bordered w-full">
              <option value="">Select Experience</option>
              <option value="Entry Level">Entry Level</option>
              <option value="Mid Level">Mid Level</option>
              <option value="Senior Level">Senior Level</option>
            </select>
            {errors.experience && <span className='text-red-500'>This field is required</span>}
          </div>

          {/* Posted Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Posted Date</label>
            <input
              type="date"
              {...register("postedDate", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.postedDate && <span className='text-red-500'>This field is required</span>}
          </div>

          {/* Last Date To Apply */}
          <div>
            <label className="block text-sm font-medium mb-1">Last Date To Apply</label>
            <input
              type="date"
              {...register("lastDateToApply", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.lastDateToApply && <span className='text-red-500'>This field is required</span>}
          </div>

          {/* Close Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Close Date</label>
            <input
              type="date"
              {...register("closeDate", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.closeDate && <span className='text-red-500'>This field is required</span>}
          </div>

          {/* Salary From */}
          <div>
            <label className="block text-sm font-medium mb-1">Salary From</label>
            <input
              type="number"
              placeholder="Salary From"
              {...register("salaryFrom", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.salaryFrom && <span className='text-red-500'>This field is required</span>}
          </div>

          {/* Salary To */}
          <div>
            <label className="block text-sm font-medium mb-1">Salary To</label>
            <input
              type="number"
              placeholder="Salary To"
              {...register("salaryTo", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.salaryTo && <span className='text-red-500'>This field is required</span>}
          </div>

          {/* Enter City */}
          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <input
              type="text"
              placeholder="Enter City"
              {...register("city", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.city && <span className='text-red-500'>This field is required</span>}
          </div>

          {/* Enter State */}
          <div>
            <label className="block text-sm font-medium mb-1">State</label>
            <input
              type="text"
              placeholder="Enter State"
              {...register("state", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.state && <span className='text-red-500'>This field is required</span>}
          </div>

          {/* Enter Country */}
          <div>
            <label className="block text-sm font-medium mb-1">Country</label>
            <input
              type="text"
              placeholder="Enter Country"
              {...register("country", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.country && <span className='text-red-500'>This field is required</span>}
          </div>

          {/* Enter Education Level */}
          <div>
            <label className="block text-sm font-medium mb-1">Education Level</label>
            <input
              type="text"
              placeholder="Enter Education Level"
              {...register("educationLevel", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.educationLevel && <span className='text-red-500'>This field is required</span>}
          </div>

          {/* Job Description */}
          <div className='col-span-2'>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea rows="5"
              placeholder="Enter Job Description"
              {...register("description", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.description && <span className='text-red-500'>This field is required</span>}
          </div>

{/* Status */}
<div className="mb-4 col-span-2">
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
