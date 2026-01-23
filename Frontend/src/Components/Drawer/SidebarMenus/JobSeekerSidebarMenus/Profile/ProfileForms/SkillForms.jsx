import { useForm } from "react-hook-form";
import { useUpdateProfile } from "../../../../../../hooks/useUpdateProfile";
import { useCurrentUser } from "../../../../../../hooks/useAuth";

export const SkillForms = () => {
  const { mutate, isPending } = useUpdateProfile();

  const { data: userinfos, isPending: userloading } = useCurrentUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      skills: userinfos?.user?.skills || "",
    
      languages: userinfos?.user?.languages || "",
    },
  });

  const onSubmit = (data) => {
    const formData = {
      skills: data.skills,
     
      languages: data.languages,
    };

    console.log("Skills Data:", formData);
    mutate(formData);
  };

  if (userloading) return <p>Loading user details...</p>;

  return (
    <div className="p-6 flex flex-col md:flex-row">
      <div className="md:w-2/6">
        <h1 className="text-2xl font-bold">Skills</h1>
        <p className="text-gray-500 mb-4">
          Add your technical skills, tools & languages.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-6 w-full md:px-8"
      >
        {/* Skills */}
        <div className="col-span-2">
          <label className="text-sm font-medium text-gray-700">
            Technical Skills*
          </label>
          <input
            type="text"
            {...register("skills", { required: "Skills are required" })}
            placeholder="e.g., React, Node.js, Express, MongoDB"
            className="input w-full mt-1"
          />
          {errors.skills && (
            <p className="text-red-500 text-sm">{errors.skills.message}</p>
          )}
        </div>

    

        {/* Languages */}
        <div className="col-span-2">
          <label className="text-sm font-medium text-gray-700">
            Languages
          </label>
          <input
            type="text"
            {...register("languages")}
            placeholder="e.g., Bangla, English, Hindi"
            className="input w-full mt-1"
          />
        </div>

        {/* Submit */}
        <div className="col-span-2 flex justify-end">
          <button
            type="submit"
            className="btn btn-outline"
            disabled={isPending}
          >
            {isPending ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};
