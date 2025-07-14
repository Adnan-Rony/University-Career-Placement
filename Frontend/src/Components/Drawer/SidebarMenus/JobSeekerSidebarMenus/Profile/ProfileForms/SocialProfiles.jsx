
import React from 'react';
import { useForm } from 'react-hook-form';

export const SocialProfiles = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      website: 'https://tamjidahmedportfolio.netlify.app/',
      linkedin: 'https://www.linkedin.com/in/tamjid-ahmed-profile59326b/',
      github: 'https://github.com/Tamjid388',
      twitter: 'https://twitter.com/username',
    },
  });

  const onSubmit = (data) => {
    console.log('Social Profiles:', data);
  };

  return (
    <div className="p-6 flex">
      <div className=" w-2/6 ">
        
        <h1 className='text-2xl font-bold'>Social Profiles</h1>
        <p className="text-gray-500 mb-4">
         Where can people find you online?
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}
       className="grid grid-cols-2 gap-6  w-full px-8">
        {/* Website */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Website*
          </label>
          <input
            type="url"
            {...register('website', { required: 'Website is required' })}
            className="mt-1 input w-full"
          />
          {errors.website && (
            <p className="text-red-500 text-sm">{errors.website.message}</p>
          )}
        </div>

        {/* LinkedIn */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            LinkedIn*
          </label>
          <input
            type="url"
            {...register('linkedin', { required: 'LinkedIn is required' })}
            className="mt-1 input w-full"
          />
          {errors.linkedin && (
            <p className="text-red-500 text-sm">{errors.linkedin.message}</p>
          )}
        </div>

        {/* GitHub */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            GitHub*
          </label>
          <input
            type="url"
            {...register('github', { required: 'GitHub is required' })}
            className="mt-1 input w-full"
          />
          {errors.github && (
            <p className="text-red-500 text-sm">{errors.github.message}</p>
          )}
        </div>

        {/* Twitter */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Twitter
          </label>
          <input
            type="url"
            {...register('twitter')}
            className="mt-1 input w-full"
          />
        </div>

        <button type="submit" 
        className="btn bg-r-accent text-white col-span-2">
          Save
        </button>
      </form>
    </div>
  );
};
