import React, { useEffect, useRef, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import toast from "react-hot-toast";
import { SocialProfiles } from "../ProfileForms/SocialProfiles";
import {
  useCurrentUser,
  useUpdateProfile,
} from "../../../../../../hooks/useAuth.js";

export const ProfileTab = () => {
  const { data: userData, isLoading } = useCurrentUser();
  const { mutate: updateProfile, isPending } = useUpdateProfile();
  const [cover, setCover] = useState("");
  const fileInputRef = useRef();

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      location: "",
      primaryRole: "",
      yearsExperience: "",
      openRoles: [],
      bio: "",
      website: "",
      linkedin: "",
      github: "",
      twitter: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "openRoles",
  });

  useEffect(() => {
    if (userData?.user) {
      reset({
        name: userData.user.name || "",
        location: userData.user.address?.city || "",
        primaryRole: userData.user.primaryRole || "",
        yearsExperience: userData.user.experience || "",
        openRoles: userData.user.openRoles || [],
        bio: userData.user.bio || "",
        website: userData.user.socialLinks?.portfolio || "",
        linkedin: userData.user.socialLinks?.linkedin || "",
        github: userData.user.socialLinks?.github || "",
        twitter: userData.user.socialLinks?.twitter || "",
      });

      // Set current profile picture if exists
      setCover(userData.user.picture || "");
    }
  }, [userData, reset]);

  const onSubmit = (formData) => {
    const payload = {
      name: formData.name,
      bio: formData.bio,
      experience: formData.yearsExperience,
      primaryRole: formData.primaryRole,
      openRoles: formData.openRoles,
      address: {
        city: formData.location,
      },
      socialLinks: {
        portfolio: formData.website,
        linkedin: formData.linkedin,
        github: formData.github,
        twitter: formData.twitter,
      },
      picture: cover, // Final profile picture
    };

    updateProfile(payload, {
      onSuccess: () => toast.success("Profile updated successfully!"),
      onError: () => toast.error("Failed to update profile."),
    });
  };

  const handleCoverUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

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
    }
  };

  if (isLoading) return <p className="p-6">Loading profile...</p>;

  return (
    <div>
      <div className="p-6 flex">
        <div className="w-2/6">
          <h1 className="text-2xl font-bold">About</h1>
          <p className="text-gray-500 mb-4">
            Tell us about yourself so startups know who you are.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-6 px-8 w-full"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your name*
            </label>
            <input
              {...register("name")}
              className="mt-1 w-full px-4 py-2 border border-purple-300 rounded-md"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Profile Image Upload */}
          <div className="flex items-center">
            <img
              src={cover || "/defavatar.png"}
              alt="Profile"
              className="w-20 h-20 rounded-full mr-4  border-gray-400 object-cover"
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
              Upload a new photo
            </button>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Where are you based?*
            </label>
            <input
              {...register("location")}
              className="mt-1 w-full px-4 py-2 border border-purple-300 rounded-md"
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">
                {errors.location.message}
              </p>
            )}
          </div>

          {/* Primary Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Select your primary role*
            </label>
            <select
              {...register("primaryRole")}
              className="mt-1 w-full px-4 py-2 border border-purple-300 rounded-md"
            >
              <option value="">Select role</option>
              <option>Frontend Engineer</option>
              <option>Full-Stack Engineer</option>
            </select>
            {errors.primaryRole && (
              <p className="text-red-500 text-sm mt-1">
                {errors.primaryRole.message}
              </p>
            )}
          </div>

          {/* Experience */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Years of experience*
            </label>
            <select
              {...register("yearsExperience")}
              className="mt-1 w-full px-4 py-2 border border-purple-300 rounded-md"
            >
              <option value="">Select experience</option>
              <option>&lt; 1 Year</option>
              <option>1 Year</option>
              <option>2 Years</option>
            </select>
            {errors.yearsExperience && (
              <p className="text-red-500 text-sm mt-1">
                {errors.yearsExperience.message}
              </p>
            )}
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your bio
            </label>
            <textarea
              {...register("bio", {
                minLength: {
                  value: 20,
                  message: "Bio must be at least 20 characters",
                },
              })}
              className="mt-1 w-full border border-purple-300 rounded-md"
              rows="4"
            />
            {errors.bio && (
              <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>
            )}
          </div>

          {/* Social Links */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Website*
            </label>
            <input
              type="url"
              {...register("website")}
              className="mt-1 input w-full"
            />
            {errors.website && (
              <p className="text-red-500 text-sm">{errors.website.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              LinkedIn*
            </label>
            <input
              type="url"
              {...register("linkedin")}
              className="mt-1 input w-full"
            />
            {errors.linkedin && (
              <p className="text-red-500 text-sm">{errors.linkedin.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              GitHub*
            </label>
            <input
              type="url"
              {...register("github")}
              className="mt-1 input w-full"
            />
            {errors.github && (
              <p className="text-red-500 text-sm">{errors.github.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Twitter
            </label>
            <input
              type="url"
              {...register("twitter")}
              className="mt-1 input w-full"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-primary w-full mt-4"
            disabled={isPending}
          >
            {isPending ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>

      {/* Optional: <SocialProfiles /> */}
    </div>
  );
};
