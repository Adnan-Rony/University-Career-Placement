import React, { useEffect, useRef } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useResumeContext } from '../../../Context/ResumeProvider'
import { Trash } from 'lucide-react'

export default function ResumeEducationForm() {
 const {  addEducation, setSubmit, setTriggerSubmit,resumeData }=useResumeContext()
  const { register, control, handleSubmit,reset } = useForm(

)

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education"
  })



 const formRef = useRef(null);
  const onSubmit = (data) => {
    //  data.education.forEach((edu) => addEducation(edu));
    addEducation(data.education)
     setSubmit(false);
  }

  useEffect(() => {
  if (resumeData?.education) {
    reset({
      education: resumeData.education.map(item => ({
        degree: item.degree || "",
        institution: item.institution || "",
        startYear: item.startYear || "",
        endYear: item.endYear || "",
        grade: item.grade || "",
        _id: item._id || ""
      }))
    });
  }
}, [resumeData, reset]);

    useEffect(() => {
      setTriggerSubmit(() => handleSubmit(onSubmit)); 
    }, []);

  return (
 <div className="max-w-5xl mx-auto p-2 sm:p-6">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 px-6 py-5">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            🎓 Education Details
          </h2>
          <p className="text-blue-100 mt-1 text-sm">Add your academic qualifications</p>
        </div>

        <form 
          ref={formRef} 
          onSubmit={handleSubmit(onSubmit)}  
          className="flex flex-col gap-6 p-6 sm:p-8"
        >

          {fields.map((item, index) => (
            <div 
              key={item.id} 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 
              p-4
              rounded-xl "
            >

              {/* Degree */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Degree / Qualification</label>
                <input
                  className="px-4 py-2.5 border rounded-lg w-full border-gray-300 bg-white hover:border-purple-400 
                  focus:outline-none focus:ring-2 focus:ring-purple-500"
                  {...register(`education.${index}.degree`, { required: true })}
                />
              </div>

              {/* Institution */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Institution</label>
                <input
                  className="px-4 py-2.5 border rounded-lg w-full border-gray-300 bg-white hover:border-purple-400 
                  focus:outline-none focus:ring-2 focus:ring-purple-500"
                  {...register(`education.${index}.institution`, { required: true })}
                />
              </div>

              {/* Start Year */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Start Year</label>
                <input
                  type="text"
                  className="px-4 py-2.5 border rounded-lg w-full border-gray-300 bg-white hover:border-purple-400 
                  focus:outline-none focus:ring-2 focus:ring-purple-500"
                  {...register(`education.${index}.startYear`, { required: true })}
                />
              </div>

              {/* End Year */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">End Year</label>
                <input
                  type="text"
                  className="px-4 py-2.5 border rounded-lg w-full border-gray-300 bg-white hover:border-purple-400 
                  focus:outline-none focus:ring-2 focus:ring-purple-500"
                  {...register(`education.${index}.endYear`, { required: true })}
                />
              </div>

              {/* Grade */}
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-medium text-gray-700 mb-1">Grade / CGPA</label>
                <input
                  className="px-4 py-2.5 border rounded-lg w-full border-gray-300 bg-white hover:border-purple-400 
                  focus:outline-none focus:ring-2 focus:ring-purple-500"
                  {...register(`education.${index}.grade`)}
                />
              </div>

              {/* Remove button */}
              {fields.length > 1 && (
                <div className="md:col-span-2 flex justify-end">
                  <button
                    type="button"
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition flex items-center gap-2 shadow"
                    onClick={() => remove(index)}
                  >
                    <Trash className="w-4 h-4" /> Remove
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Add new education */}
          <div className="flex justify-between items-center mt-2">
            <button
              type="button"
              className="px-5 py-2.5 bg-purple-700 text-white rounded-lg shadow hover:bg-purple-800 transition"
              onClick={() =>
                append({ degree: "", institution: "", startYear: "", endYear: "", grade: "" })
              }
            >
              + Add Education
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}
