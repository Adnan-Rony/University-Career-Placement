import { useContext } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { ProfileContext } from "../../../../../../Context/ProfileProvider";

const degreeOptions = {
  degrees: [
    // Undergraduate Degrees
    { label: "Bachelor of Science", value: "bsc" },
    { label: "Bachelor of Arts", value: "ba" },
    { label: "Bachelor of Business Administration", value: "bba" },
    { label: "Bachelor of Engineering", value: "be" },
    { label: "Bachelor of Technology", value: "btech" },

    // Associate Degrees
    { label: "Associate of Science", value: "as" },
    { label: "Associate of Arts", value: "aa" },

    // Postgraduate Degrees
    { label: "Master of Science", value: "msc" },
    { label: "Master of Arts", value: "ma" },
    { label: "Master of Business Administration", value: "mba" },
    { label: "Master of Engineering", value: "me" },

    // Professional & Doctorate Degrees
    { label: "Doctor of Philosophy (PhD)", value: "phd" },
    { label: "Doctor of Medicine (MD)", value: "md" },
    { label: "Juris Doctor (JD)", value: "jd" },

    // Non-Degree Programs
    { label: "Diploma", value: "diploma" },
    { label: "Certificate Program", value: "certificate" },
    { label: "Short Course", value: "short_course" },
    { label: "Vocational Training", value: "vocational" },
    { label: "Online Course / MOOC", value: "online_course" },

    // Other
    { label: "Other / Not Listed", value: "other" },
  ],
};

export const EducationForm = () => {
  const { profileData, setProfileData } = useContext(ProfileContext);
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      education: profileData.education,
    },
  });

  const { fields, append, prepend, remove } = useFieldArray({
    control,
    name: "education",
  });
  const onSubmit = (data) => {
    updateProfileSection("education", data.education);
  };
  return (
    <div className="p-6 flex flex-col md:flex-row">
      <div className="md:w-2/6 ">
        <h1 className="text-2xl font-bold">Education</h1>
        <p className="text-gray-500 mb-4">What schools have you studied at?</p>
      </div>
      <div className=" w-full md:px-8">
        <form onSubmit={handleSubmit(onSubmit)} className="  w-full ">
          {fields.map((field, index) => (
            <section key={field.id} className="mb-6   rounded">
              {/* College Name */}
              <div className="flex flex-col  mb-3 space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Education (College Name)
                </label>
                <input
                  type="text"
                  placeholder="College Name"
                  className="input input-bordered  w-full"
                  {...register(`education.${index}.college`, {
                    required: "College name is required",
                  })}
                />
                {errors.education?.[index]?.college && (
                  <p className="text-red-500 text-sm">
                    {errors.education[index].college.message}
                  </p>
                )}
              </div>

              {/* Graduation Year */}
              <div className="flex flex-col  mb-3 space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Graduation Year
                </label>
                <input
                  type="text"
                  placeholder="e.g. 2024"
                  className="input
                                     input-bordered w-full"
                  {...register(`education.${index}.graduationYear`, {
                    required: "Graduation year is required",
                  })}
                />
                {errors.education?.[index]?.graduationYear && (
                  <p className="text-red-500 text-sm">
                    {errors.education[index].graduationYear.message}
                  </p>
                )}
              </div>

              {/* Degree & Major */}
              <div className="flex flex-col  mb-3 space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Degree & Major
                </label>
                <select
                  className="select select-bordered w-full"
                  {...register(`education.${index}.degreeType`, {
                    required: "Degree type is required",
                  })}
                >
                  <option className="font-semibold" value="">
                    Select Degree Type
                  </option>
                  {degreeOptions.degrees.map(({ label, value }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                {errors.education?.[index]?.degreeType && (
                  <p className="text-red-500 text-sm">
                    {errors.education[index].degreeType.message}
                  </p>
                )}
              </div>
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="btn btn-error btn-sm mt-2"
                >
                  Remove
                </button>
              )}
            </section>
          ))}

          <div className="grid-cols-2">
            <button
              type="button"
              onClick={() =>
                append({ college: "", graduationYear: "", degreeType: "" })
              }
              className="btn btn-outline"
            >
              + Add More
            </button>

            <button type="submit" className="btn ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
