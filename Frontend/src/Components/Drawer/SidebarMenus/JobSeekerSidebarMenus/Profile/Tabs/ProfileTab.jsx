import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { SocialProfiles } from '../ProfileForms/SocialProfiles';
import { EducationForm } from '../ProfileForms/EducationForm';

export const ProfileTab = () => {
  const { register, control, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      name: 'Tamjid Ahmed Razin',
      location: 'Bangladesh, Bangladesh',
      primaryRole: 'Frontend Engineer',
      yearsExperience: '< 1 Year',
      openRoles: ['Full-Stack Engineer'],
      bio: "I'm a Junior MERN Stack Web Developer with a strong passion for building responsive, user-friendly web applications. Proficient in MongoDB, Express.js, React, and Node.js"
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "openRoles"
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
   <div>
     <div className="p-6 flex">
      <div className=" w-2/6">
        <h1 className='text-2xl font-bold'>About</h1>
        <p className="text-gray-500 mb-4">
          Tell us about yourself so startups know who you are.
        </p>
          </div>
      <form onSubmit={handleSubmit(onSubmit)}
       className="grid grid-cols-1 gap-6  px-8
         w-full">
        {/* Name */}
        <div >
          <label className="block text-sm font-medium text-gray-700">Your name*</label>
          <input
            {...register('name',{required:"Name is required"})}
            className="mt-1 w-full 
            input"
          />
           {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        {/* Image */}
        <div className="flex items-center">
          <img src="/defavatar.png"
           alt="Profile"
            className="w-20 h-20 rounded-full mr-4 animate-pulse" />
          <button type="button" 
          className="btn btn-outline">Upload a new photo</button>
        </div>
        {/* Location */}
        <div className="">
          <label className="block text-sm font-medium text-gray-700">Where are you based?*</label>
          <input
            {...register('location',{required:"Location is required"})}
            className="mt-1 input w-full"
          />
           {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
        </div>
        {/* Role */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Select your primary role*</label>
          <select
            {...register('primaryRole',{required:"Role is required"})}
            className="mt-1  w-full 
             select"
          >
            <option>Frontend Engineer</option>
            <option>Full-Stack Engineer</option>
            <option>Select role</option>
          </select>
            {errors.primaryRole && <p className="text-red-500 text-sm mt-1">{errors.primaryRole.message}</p>}
        </div>
        {/* Experience */}
    
        <div>
          <label className="block text-sm font-medium text-gray-700">Years of experience*</label>
          <select
            {...register('yearsExperience', { required: "Experience is required" })}
            className="mt-1 input  w-full"
          >
            <option value="">Select experience</option>
            <option>&lt; 1 Year</option>
            <option>1 Year</option>
            <option>2 Years</option>
          </select>
          {errors.yearsExperience && <p className="text-red-500 text-sm mt-1">{errors.yearsExperience.message}</p>}
        </div>
       {/* Bio */}
        <div className="">
          <label className="block text-sm font-medium text-gray-700">Your bio</label>
           <textarea
            {...register('bio', {
              required: "Bio is required",
              minLength: {
                value: 20,
                message: "Bio must be at least 20 characters"
              }
            })}
            className="mt-1 textarea  w-full"
            rows="4"
          />
          {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>}
        </div>
        
      </form>
    
    </div>

    
    <SocialProfiles/>
    <EducationForm/>
   </div>
  );
};