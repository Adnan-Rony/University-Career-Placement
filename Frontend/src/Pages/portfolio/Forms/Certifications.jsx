import { Award, Calendar, Trash2 } from "lucide-react";

const Certifications = ({ register, certificationsArray }) => (
  <section className="relative overflow-hidden border border-gray-200 rounded-xl p-4 mt-6">
    
    {/* Header */}
    <div className="mb-8 pb-6 border-b border-gray-200">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg">
          <Award className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-800 bg-clip-text text-transparent">
          Certifications
        </h2>
      </div>
      <p className="text-sm text-gray-600 ml-11">Add your professional certifications</p>
    </div>

    {/* Certification Fields */}
    <div className="space-y-6">
      {certificationsArray.fields.map((item, idx) => (
        <div
          key={item.id}
          className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm space-y-4"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Certificate Title
            </label>
            <input
              {...register(`certifications.${idx}.title`)}
              placeholder="Certificate Title"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Issuer
            </label>
            <input
              {...register(`certifications.${idx}.issuer`)}
              placeholder="Issuer"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              Issue Date
            </label>
            <input
              {...register(`certifications.${idx}.issueDate`)}
              type="date"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Certificate URL
            </label>
            <input
              {...register(`certifications.${idx}.certificateUrl`)}
              placeholder="Certificate URL"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
          </div>

          {/* Remove Button */}
          <button
            type="button"
            onClick={() => certificationsArray.remove(idx)}
            className="flex items-center gap-2 text-red-600 font-medium bg-red-100 hover:bg-red-200 px-4 py-2 rounded-lg transition"
          >
            <Trash2 className="w-4 h-4" />
            Remove Certification
          </button>
        </div>
      ))}
    </div>

    {/* Add Certification Button */}
    <button
      type="button"
      onClick={() =>
        certificationsArray.append({ title: "", issuer: "", issueDate: "", certificateUrl: "" })
      }
      className="mt-6 w-full py-3 rounded-lg text-white font-medium bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 shadow-md hover:opacity-90 transition"
    >
      + Add Certification
    </button>
  </section>
);

export default Certifications;
