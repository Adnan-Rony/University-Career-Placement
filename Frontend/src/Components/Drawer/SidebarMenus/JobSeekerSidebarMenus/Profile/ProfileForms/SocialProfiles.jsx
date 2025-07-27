import { FaLinkedin ,FaGithub } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiGlobeAlt } from "react-icons/hi";
import { useContext } from "react";
import { ProfileContext } from "../../../../../../Context/ProfileProvider";
import { useUpdateProfile } from "../../../../../../hooks/useUpdateProfile";


export const SocialProfiles = () => {
  const { mutate,isPending,isSuccess,isError   }=useUpdateProfile()
  const {profileData,setProfileData}=useContext(ProfileContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues:profileData.social
  });

  const onSubmit = (data) => {
    const formData={
      socialLinks:{
        portfolio: data.portfolio,
        linkedin: data.linkedin,
        github: data.github,
        twitter: data.twitter,
      }
    }
    console.log('Social Profiles:',formData);
    mutate(formData)
  };

  return (
    <div className="p-6 flex flex-col md:flex-row">
      <div className="md:w-2/6 ">
        
        <h1 className='text-2xl font-bold'>Social Profiles</h1>
        <p className="text-gray-500 mb-4">
         Where can people find you online?
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}
       className="grid grid-cols-2 gap-6  w-full md:px-8">
        {/* Website */}
        <div className="col-span-2">
          <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
           <HiGlobeAlt /> Website*
          </label>
          <input
            type="url"
            {...register('portfolio', { required: 'Website is required' })}
            className="mt-1 input w-full"
          />
          {errors.portfolio && (
            <p className="text-red-500 text-sm">{errors.portfolio.message}</p>
          )}
        </div>

        {/* LinkedIn */}
        <div className="col-span-2">
          <label className="text-sm font-medium text-gray-700
          flex items-center gap-1 ">
          <FaLinkedin />  LinkedIn
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
          <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
            <FaGithub />GitHub
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
          <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
           <FaSquareXTwitter /> X
          </label>
          <input
            type="url"
            {...register('twitter')}
            className="mt-1 input w-full"
          />
        </div>
    <div className="col-span-2 flex justify-end">
      <button
      type="submit"
      className="btn btn-outline ">Submit</button>
    </div>
      
      </form>
    </div>
  );
};
