import React, { useEffect, useRef } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useResumeContext } from '../../../Context/ResumeProvider'
import { Trash } from 'lucide-react'

export default function ResumeSkillForm() {
  const { updateSkills, setSubmit, setTriggerSubmit ,resumeData} = useResumeContext()
  const { register, control, handleSubmit,reset } = useForm(

)

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'skills'
  })
useEffect(() => {
  if (resumeData?.skills) {
    reset({
      skills: resumeData.skills.map(item => ({
        name: item.name || "",
        level: item.level || "",
        _id: item._id || ""
      }))
    });
  }
}, [resumeData, reset]);

  
  const formRef = useRef(null)

  const onSubmit = (data) => {
    // data.skills.forEach((skill) => updateSkills(skill));
updateSkills(data.skills)
    setSubmit(false)
  }

  useEffect(() => {
    setTriggerSubmit(() => handleSubmit(onSubmit))
  }, [])
  const skillLevels = ["Beginner", "Intermediate", "Advanced", "Expert"];
  return (
  <div className="max-w-4xl mx-auto p-2 sm:p-6">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 px-6 py-5">
          <h2 className="text-2xl font-bold text-white">Skills</h2>
          <p className="text-indigo-100 text-sm">
            Add your technical & soft skills with a proficiency level
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 sm:p-8 flex flex-col gap-6"
        >
          {fields.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center gap-4 bg-gray-50 p-4 
              border border-gray-200 rounded-lg shadow-sm"
            >
              {/* Skill Name */}
              <input
                className="px-4 py-2.5 border rounded-lg w-full transition-all duration-200 
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                bg-white border-gray-300 hover:border-gray-400"
                placeholder="Enter skill (e.g. React, Tailwind, SQL)"
                {...register(`skills.${index}.name`, { required: true })}
              />

              {/* Skill Level */}
              <select
                className="px-4 py-2.5 border rounded-lg w-full md:w-1/3 transition-all duration-200 
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                bg-white border-gray-300 hover:border-gray-400"
                {...register(`skills.${index}.level`)}
              >
                {skillLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>

              {/* Remove Button */}
              {fields.length > 1 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="p-2 rounded-lg hover:bg-red-100 transition"
                >
                  <Trash className="text-red-600" />
                </button>
              )}
            </div>
          ))}

          {/* Add Skill Button */}
          <div className="flex justify-start">
            <button
              type="button"
              className="px-4 py-2.5 bg-purple-700 hover:bg-purple-800 
              text-white rounded-lg shadow-md transition"
              onClick={() => append({ name: "", level: "Beginner" })}
            >
              + Add Skill
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
