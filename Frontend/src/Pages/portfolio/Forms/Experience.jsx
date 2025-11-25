import { Briefcase, Calendar, FileText, Trash2 } from "lucide-react";

const Experience = ({ register, experienceArray }) => (
  <section className="relative overflow-hidden border border-gray-200 rounded-xl p-4 mt-6">
    
    {/* Header */}
    <div className="mb-8 pb-6 border-b border-gray-200">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg">
          <Briefcase className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-800 bg-clip-text text-transparent">
          Experience
        </h2>
      </div>
      <p className="text-sm text-gray-600 ml-11">Add your professional experience</p>
    </div>

    {/* Experience Fields */}
    <div className="space-y-6">
      {experienceArray.fields.map((item, idx) => (
        <div
          key={item.id}
          className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm space-y-4"
        >
          {/* Company */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Company Name
            </label>
            <input
              {...register(`experience.${idx}.company`)}
              placeholder="Company Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Role / Position
            </label>
            <input
              {...register(`experience.${idx}.role`)}
              placeholder="Role / Position"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
          </div>

          {/* Start & End Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                Start Date
              </label>
              <input
                {...register(`experience.${idx}.startDate`)}
                type="date"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                End Date
              </label>
              <input
                {...register(`experience.${idx}.endDate`)}
                type="date"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-gray-500" />
              Description
            </label>
            <textarea
              {...register(`experience.${idx}.description`)}
              placeholder="Describe your role and responsibilities"
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition resize-none"
            />
          </div>

          {/* Remove Button */}
          <button
            type="button"
            onClick={() => experienceArray.remove(idx)}
            className="flex items-center gap-2 text-red-600 font-medium bg-red-100 hover:bg-red-200 px-4 py-2 rounded-lg transition"
          >
            <Trash2 className="w-4 h-4" />
            Remove Experience
          </button>
        </div>
      ))}
    </div>

    {/* Add Experience Button */}
    <button
      type="button"
      onClick={() =>
        experienceArray.append({
          company: "",
          role: "",
          startDate: "",
          endDate: "",
          description: "",
        })
      }
      className="mt-6 w-full py-3 rounded-lg text-white font-medium bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 shadow-md hover:opacity-90 transition"
    >
      + Add Experience
    </button>
  </section>
);

export default Experience;
