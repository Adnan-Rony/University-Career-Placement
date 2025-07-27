import { useContext, useRef, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { ProfileContext } from '../../../../../../Context/ProfileProvider';

import toast from 'react-hot-toast';
import { useUpdateProfile } from '../../../../../../hooks/useAuth';

export const AboutForm = () => {
  // Calling ProvderContext:Context APi
  const { profileData, updateProfileSection } = useContext(ProfileContext)
  const { mutate,isPending,isSuccess,isError   }=useUpdateProfile()
  const fileInputRef = useRef();
  const [cover, setCover] = useState("");
  const [isUploading,setIsUploading]=useState(false)
  const { register, control, handleSubmit, watch, formState: { errors } } = useForm(

);


//  Image Upload
  const handleCoverUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
     setIsUploading(true); 
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "blogging");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dnpycgwch/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      setCover(data.secure_url);
      toast.success("Profile photo uploaded!");
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("Failed to upload photo");
    }finally{
      setIsUploading(false);
    }
  };

  // Handle Submit

  const onSubmit = (data) => {
    updateProfileSection('about', data);
    const payload = {
      name: data.name,
      location: data.location,
      primaryRole: data.primaryRole,
      yearsExperience: data.yearsExperience,
      bio: data.bio,
      picture: cover ,
    };
    console.log(payload);
    mutate(payload)
  };
 
  return (
    <div>
      <div className="p-6 flex flex-col md:flex-row">
        <div className=" md:w-2/6">
          <h1 className='text-2xl font-bold'>About</h1>
          <p className="text-gray-500 mb-4">
            Tell us about yourself so startups know who you are.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-6  md:px-8
         w-full">
          {/* Name */}
          <div >
            <label className="block text-sm font-medium text-gray-700">Your name*</label>
            <input
              {...register('name', { required: "Name is required" })}
              className="mt-1 w-full 
            input"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
          {/* Image */}
          {/* <div className="flex items-center">
            <img src="/defavatar.png"
              alt="Profile"
              className="w-20 h-20 rounded-full mr-4 animate-pulse" />
            <button type="button"
              className="btn btn-outline">Upload a new photo</button>
          </div> */}
           {/* Profile Image Upload */}
          <div className="flex items-center">
            <img
              src={ cover || "/defavatar.png"}
              alt="Profile"
              className="w-20 h-20 rounded-full mr-4  animate-pulse  border-gray-400 object-cover"
            />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleCoverUpload}
              className="hidden"
            />
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => fileInputRef.current.click()}
            >
              {isUploading ? "Uploading image..." : "Upload a new photo"}
            </button>
          </div>
          {/* ........ */}
          {/* Location */}
          <div className="">
            <label className="block text-sm font-medium text-gray-700">Where are you based?*</label>
            <input
              {...register('location', { required: "Location is required" })}
              className="mt-1 input w-full"
            />
            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
          </div>
          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Select your primary role*</label>
            <select
              {...register('primaryRole', { required: "Role is required" })}
              className="mt-1  w-full 
             select"
            >
               <option value="">Select Select Role</option>
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
          <div>
            <button 
            type='submit'
            className="btn">
              Submit
            </button>
          </div>

        </form>

      </div>
    </div>
  )
}
