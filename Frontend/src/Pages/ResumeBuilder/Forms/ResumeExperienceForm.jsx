import React from 'react'

export default function ResumeExperienceForm() {
  return (
    <div className="p-6 bg-gray-100 rounded-lg">
    <h2 className="text-xl font-bold mb-2">Experience</h2>
    <input type="text" placeholder="Company Name" className="input input-bordered w-full mb-2" />
    <input type="text" placeholder="Role" className="input input-bordered w-full mb-2" />
  </div>
  )
}
