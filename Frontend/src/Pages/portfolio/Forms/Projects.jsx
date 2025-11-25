import { Folder, Code, Link, ImageIcon, Trash2 } from "lucide-react";

const Projects = ({ register, projectsArray }) => (
  <section className="relative overflow-hidden border border-gray-200 rounded-xl p-4 mt-6">
    
    {/* Header */}
    <div className="mb-8 pb-6 border-b border-gray-200">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg">
          <Folder className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-800 bg-clip-text text-transparent">
          Projects
        </h2>
      </div>
      <p className="text-sm text-gray-600 ml-11">Add your projects with details and links</p>
    </div>

    {/* Project Fields */}
    <div className="space-y-6">
      {projectsArray.fields.map((item, idx) => (
        <div
          key={item.id}
          className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm space-y-4"
        >
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Project Title
            </label>
            <input
              {...register(`projects.${idx}.title`)}
              placeholder="Project Title"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description
            </label>
            <textarea
              {...register(`projects.${idx}.description`)}
              placeholder="Brief description of your project"
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition resize-none"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-gray-500" />
              Image URL
            </label>
            <input
              {...register(`projects.${idx}.image`)}
              placeholder="https://example.com/project-image.jpg"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
          </div>

          {/* Tech Stack */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <Code className="w-4 h-4 text-gray-500" />
              Tech Stack
            </label>
            <input
              {...register(`projects.${idx}.techStack`)}
              placeholder="React, Node.js, Tailwind CSS"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
          </div>

          {/* GitHub URL */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <Link className="w-4 h-4 text-gray-500" />
              GitHub URL
            </label>
            <input
              {...register(`projects.${idx}.githubUrl`)}
              placeholder="https://github.com/username/project"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
          </div>

          {/* Live URL */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <Link className="w-4 h-4 text-gray-500" />
              Live URL
            </label>
            <input
              {...register(`projects.${idx}.liveUrl`)}
              placeholder="https://project-live-site.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
          </div>

          {/* Remove Button */}
          <button
            type="button"
            onClick={() => projectsArray.remove(idx)}
            className="flex items-center gap-2 text-red-600 font-medium bg-red-100 hover:bg-red-200 px-4 py-2 rounded-lg transition"
          >
            <Trash2 className="w-4 h-4" />
            Remove Project
          </button>
        </div>
      ))}
    </div>

    {/* Add Project Button */}
    <button
      type="button"
      onClick={() =>
        projectsArray.append({
          title: "",
          description: "",
          image: "",
          techStack: "",
          githubUrl: "",
          liveUrl: "",
        })
      }
      className="mt-6 w-full py-3 rounded-lg text-white font-medium bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 shadow-md hover:opacity-90 transition"
    >
      + Add Project
    </button>
  </section>
);

export default Projects;
