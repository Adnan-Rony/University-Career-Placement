import { GraduationCap, Calendar, School, Trash2 } from "lucide-react";

const Education = ({ register, educationArray }) => (
  <section className="relative overflow-hidden border border-gray-200 rounded-xl p-4 mt-6">

    {/* Header */}
    <div className="mb-8 pb-6 border-b border-gray-200">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-800 bg-clip-text text-transparent">
          Education
        </h2>
      </div>
    </div>

    <div className="space-y-6">
      {educationArray.fields.map((item, idx) => (
        <div
          key={item.id}
          className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm space-y-4"
        >
          {/* Institute */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Institute Name
            </label>
            <input
              {...register(`education.${idx}.college`)}
              placeholder="e.g., Harvard University"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
          </div>

          {/* Degree */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Degree
            </label>
            <input
              {...register(`education.${idx}.degree`)}
              placeholder="e.g., B.Sc in Computer Science"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
          </div>

          {/* Start & End Year */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Start Year
              </label>
              <input
                {...register(`education.${idx}.startYear`)}
                placeholder="2020"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                End Year
              </label>
              <input
                {...register(`education.${idx}.endYear`)}
                placeholder="2024"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
            </div>
          </div>

          {/* Remove Button */}
          <button
            type="button"
            onClick={() => educationArray.remove(idx)}
            className="flex items-center gap-2 text-red-600 font-medium bg-red-100 hover:bg-red-200 px-4 py-2 rounded-lg transition"
          >
            <Trash2 className="w-4 h-4" />
            Remove Education
          </button>
        </div>
      ))}
    </div>

    {/* Add Education */}
    <button
      type="button"
      onClick={() =>
        educationArray.append({
          college: "",
          degree: "",
          startYear: "",
          endYear: "",
        })
      }
      className="mt-6 btn w-full text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 border-none py-3 rounded-lg font-medium shadow-md hover:opacity-90 transition"
    >
      + Add Education
    </button>
  </section>
);

export default Education;
