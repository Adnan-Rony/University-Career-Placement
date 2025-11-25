import { Delete, Sparkles } from "lucide-react";

const Skills = ({ register, skillsArray }) => (
  <section className="relative overflow-hidden border border-gray-200 rounded-xl p-4">
    {/* Header */}
    <div className="mb-8 pb-6 border-b border-gray-200">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-800 bg-clip-text text-transparent">
          Skills
        </h2>
      </div>
      <p className="text-sm text-gray-600 ml-11">Add the skills you are confident in</p>
    </div>

    {/* Skill Fields */}
    <div className="space-y-4">
      {skillsArray.fields.map((item, idx) => (
        <div
          key={item.id}
          className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 border border-gray-200 rounded-xl bg-gray-50"
        >
          {/* Skill Name */}
          <input
            {...register(`skills.${idx}.name`)}
            placeholder="Skill Name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition outline-none"
          />

          {/* Skill Icon URL */}
          <input
            {...register(`skills.${idx}.skillImageUrl`)}
            placeholder="Skill Icon URL"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition outline-none"
          />

          {/* Level */}
          <select
            {...register(`skills.${idx}.level`)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition outline-none bg-white"
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>

          {/* Delete Button */}
          <button
            type="button"
            onClick={() => skillsArray.remove(idx)}
            className="flex items-center justify-center px-4 py-3 rounded-lg border border-red-300 text-red-600 bg-red-50 hover:bg-red-100 transition"
          >
            <Delete className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>

    {/* Add Skill */}
    <button
      type="button"
      onClick={() => skillsArray.append({ name: "", level: "Beginner", skillImageUrl: "" })}
      className="mt-6 w-full py-3 rounded-lg text-white font-medium bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 transition"
    >
      + Add Skill
    </button>
  </section>
);

export default Skills;
