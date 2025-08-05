import { useContext, useState } from "react"
import { useFieldArray, useForm } from "react-hook-form"
import { ProfileContext } from "../../../../../../Context/ProfileProvider"
import { useUpdateProfile } from "../../../../../../hooks/useUpdateProfile";

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

    { label: "Higher Secondary Certificate (HSC)", value: "hsc" },
    { label: "Secondary School Certificate (SSC)", value: "ssc" },


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
    const [date,setDate]=useState()
    const { profileData, setProfileData } = useContext(ProfileContext)
   const { mutate,isPending,isSuccess,isError   }=useUpdateProfile()
    const {
        register,
        handleSubmit,
        watch, control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            education: profileData.education
        }
    })

    const { fields, append, prepend, remove } = useFieldArray({
        control, name: "education"
    })
    const onSubmit = (data) => {
        // updateProfileSection("education", data.education);
        console.log(data);
        mutate(data)
    };
    return (
        <div className="p-6 flex flex-col md:flex-row">
            <div className="md:w-2/6 ">

                <h1 className='text-2xl font-bold'>Education</h1>
                <p className="text-gray-500 mb-4">
                    What schools have you studied at?
                </p>
            </div>
            <div className=" w-full md:px-8">
                <form onSubmit={handleSubmit(onSubmit)}
                    className="  w-full "
                >
                    {
                        fields.map((field, index) =>
                            <section key={field.id} className="mb-6   rounded">
                                {/* College Name */}
                                <div className="flex flex-col  mb-3 space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Education (College Name)</label>
                                    <input
                                        type="text"
                                        placeholder="College Name"
                                        className="input input-bordered  w-full"
                                        {...register(`education.${index}.college`, { required: "College name is required" })}
                                    />
                                    {errors.education?.[index]?.college && (
                                        <p className="text-red-500 text-sm">{errors.education[index].college.message}</p>
                                    )}
                                </div>

                                {/* Start Year */}
                                <div className="flex flex-col  mb-3 space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Start Year</label>
                                    
                                    
                                    <input
                                        type="date"
                                        placeholder="e.g. 2024"
                                        className="input
                                     input-bordered w-full"
                                        {...register(`education.${index}.startYear`, { required: "Start Year is required" })}
                                    />
                                    {errors.education?.[index]?.startYear && (
                                        <p className="text-red-500 text-sm">{errors.education[index].startYear.message}</p>
                                    )}
                                </div>
                                {/* End Year Year */}
                                <div className="flex flex-col  mb-3 space-y-1">
                                    <label className="text-sm font-medium text-gray-700">End Year</label>
                                    <input
                                        type="date"
                                        placeholder="e.g. 2024"
                                        className="input
                                     input-bordered w-full"
                                        {...register(`education.${index}.endYear`, { required: "Graduation year is required" })}
                                    />
                                    {errors.education?.[index]?.endYear && (
                                        <p className="text-red-500 text-sm">{errors.education[index].endYear.message}</p>
                                    )}
                                </div>

                                {/* Degree & Major */}
                                <div className="flex flex-col  mb-3 space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Degree & Major</label>
                                    <select
                                        className="select select-bordered w-full"
                                        {...register(`education.${index}.degreeType`, { required: "Degree type is required" })}
                                    >
                                        <option className="font-semibold" value="">Select Degree Type</option>
                                        {degreeOptions.degrees.map(({ label, value }) => (
                                            <option key={value} value={value}>{label}</option>
                                        ))}
                                    </select>
                                    {errors.education?.[index]?.degreeType && (
                                        <p className="text-red-500 text-sm">{errors.education[index].degreeType.message}</p>
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


                            </section>)
                    }

                    <div className="grid-cols-2">
                        <button
                            type="button"
                            onClick={() => append({ college: "", startYear: "",endYear:"", degreeType: "" })}
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
    )
}

