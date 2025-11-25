import { Link as LinkIcon, Trash2 } from "lucide-react";

const Blogs = ({ register, blogsArray }) => (
  <section className="relative overflow-hidden border border-gray-200 rounded-xl p-4 mt-6">

    {/* Header */}
    <div className="mb-8 pb-6 border-b border-gray-200">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg">
          <LinkIcon className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-800 bg-clip-text text-transparent">
          Blogs
        </h2>
      </div>
      <p className="text-sm text-gray-600 ml-11">Add your blog links and short descriptions</p>
    </div>

    {/* Blog Fields */}
    <div className="space-y-6">
      {blogsArray.fields.map((item, idx) => (
        <div
          key={item.id}
          className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm space-y-4"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Blog Title
            </label>
            <input
              {...register(`blogs.${idx}.title`)}
              placeholder="Blog Title"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <LinkIcon className="w-4 h-4 text-gray-500" />
              Blog URL
            </label>
            <input
              {...register(`blogs.${idx}.link`)}
              placeholder="Blog URL"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Short Description
            </label>
            <textarea
              {...register(`blogs.${idx}.description`)}
              placeholder="Short Description"
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition resize-none"
            />
          </div>

          {/* Remove Button */}
          <button
            type="button"
            onClick={() => blogsArray.remove(idx)}
            className="flex items-center gap-2 text-red-600 font-medium bg-red-100 hover:bg-red-200 px-4 py-2 rounded-lg transition"
          >
            <Trash2 className="w-4 h-4" />
            Remove Blog
          </button>
        </div>
      ))}
    </div>

    {/* Add Blog Button */}
    <button
      type="button"
      onClick={() => blogsArray.append({ title: "", link: "", description: "" })}
      className="mt-6 w-full py-3 rounded-lg text-white font-medium bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 shadow-md hover:opacity-90 transition"
    >
      + Add Blog
    </button>
  </section>
);

export default Blogs;
