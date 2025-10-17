import React, { useEffect, useRef } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useResumeContext } from '../../../Context/ResumeProvider'
import { Trash } from 'lucide-react'

export default function ResumeSkillForm() {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      skills: [{ name: '' }]
    }
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'skills'
  })

  const { updateSkills, setSubmit, setTriggerSubmit } = useResumeContext()
  const formRef = useRef(null)

  const onSubmit = (data) => {
    // data.skills.forEach((skill) => updateSkills(skill));
updateSkills(data.skills)
    setSubmit(false)
  }

  useEffect(() => {
    setTriggerSubmit(() => handleSubmit(onSubmit))
  }, [])

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}
       className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Skills</h2>

        {fields.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center gap-3
             bg-white p-4 rounded-lg shadow-sm "
          >
            <input
              className="input w-full rounded-lg shadow-sm"
              placeholder="Enter a skill (e.g. React, Tailwind, SQL)"
              {...register(`skills.${index}.name`, { required: true })}
            />

            {fields.length > 1 && (
              <button
                type="button"
                className="btn bg-red-100 text-white"
                onClick={() => remove(index)}
              >
               <Trash className='text-red-600'/>
              </button>
            )}
          </div>
        ))}

        <div className="flex justify-between items-center mt-2">
          <button
            type="button"
            className="btn bg-purple-700 text-white"
            onClick={() => append({ name: '' })}
          >
            + Add Skill
          </button>

    
        </div>
      </form>
    </div>
  )
}
