import React from 'react'

export default function ResumeEducationForm() {
  return (
    <div className="p-6 bg-gray-100 rounded-lg">
    <h2 className="text-xl font-bold mb-2">Education</h2>
    <input type="text" placeholder="University Name" className="input input-bordered w-full mb-2" />
    <input type="text" placeholder="Degree" className="input input-bordered w-full mb-2" />
  </div>
  )
}
