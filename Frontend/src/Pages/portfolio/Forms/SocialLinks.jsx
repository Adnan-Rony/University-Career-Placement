import { Github, Linkedin, Globe } from "lucide-react";

const SocialLinks = ({ register }) => (
  <section className="relative overflow-hidden border border-gray-200 rounded-xl p-4 mt-6">

    {/* Header */}
    <div className="mb-8 pb-6 border-b border-gray-200">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg">
          <Globe className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-800 bg-clip-text text-transparent">
          Social Links
        </h2>
      </div>
      <p className="text-sm text-gray-600 ml-11">Add your social profiles or portfolio links</p>
    </div>

    <div className="space-y-6">
      <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <Github className="w-4 h-4 text-gray-500" />
            GitHub
          </label>
          <input
            {...register("socialLinks.github")}
            placeholder="GitHub Profile URL"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <Linkedin className="w-4 h-4 text-gray-500" />
            LinkedIn
          </label>
          <input
            {...register("socialLinks.linkedin")}
            placeholder="LinkedIn Profile URL"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <Globe className="w-4 h-4 text-gray-500" />
            Personal Portfolio
          </label>
          <input
            {...register("socialLinks.portfolio")}
            placeholder="Portfolio URL"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
          />
        </div>
      </div>
    </div>
  </section>
);

export default SocialLinks;
