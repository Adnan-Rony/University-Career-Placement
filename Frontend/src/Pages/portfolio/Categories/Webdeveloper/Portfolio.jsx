import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { UseCreatePortfolio } from "../../../../hooks/usePortfolio.js";
import { PortfolioPreview } from './../../../../Components/portfolio/PortfolioPreview';

const PortfolioBuilder = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      basicInfo: {
        fullName: "",
        title: "",
        bio: "",
        about: "",
        email: "",
        phone: "",
        location: "",
        profileImage: "",
      },
      skills: [{ name: "", level: "Beginner", skillImageUrl: "" }],
      projects: [
        {
          title: "",
          image: "",
          description: "",
          githubUrl: "",
          liveUrl: "",
          techStack: "",
        },
      ],
      education: [{ institute: "", degree: "", startYear: "", endYear: "" }],
      experience: [
        { company: "", role: "", startDate: "", endDate: "", description: "" },
      ],
      certifications: [
        { title: "", issuer: "", issueDate: "", certificateUrl: "" },
      ],
      blogs: [{ title: "", link: "", description: "" }],
      socialLinks: {
        github: "",
        linkedin: "",
        leetcode: "",
        portfolio: "",
      },
    },
  });

  const { mutate, isLoading, isError, isSuccess } = UseCreatePortfolio();

  // Arrays for dynamic fields
  const skillsArray = useFieldArray({ control, name: "skills" });
  const projectsArray = useFieldArray({ control, name: "projects" });
  const educationArray = useFieldArray({ control, name: "education" });
  const experienceArray = useFieldArray({ control, name: "experience" });
  const certificationsArray = useFieldArray({
    control,
    name: "certifications",
  });
  const blogsArray = useFieldArray({ control, name: "blogs" });

  // Get live form data for preview
  const formData = watch();

  const onSubmit = (data) => {
    console.log("Submitting Portfolio:", data);
    mutate(data, {
      onSuccess: () => {
        toast.success("Portfolio created successfully!");
      },
      onError: (error) => {
        toast.error("Failed to create portfolio!");
        console.error(error);
      },
    });
  };

  return (
    <div className="flex gap-6 max-w-7xl mx-auto p-6 min-h-screen">
      {/* Form: Left */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-1 space-y-8 overflow-auto max-h-screen pr-4"
      >
        <h1 className="text-3xl font-bold mb-4">Portfolio Builder</h1>

        {/* Basic Info */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Basic Information</h2>
          <input
            {...register("basicInfo.fullName")}
            placeholder="Full Name"
            className="input w-full mb-2"
          />
          <input
            {...register("basicInfo.title")}
            placeholder="Professional Title"
            className="input w-full mb-2"
          />
          <textarea
            {...register("basicInfo.bio")}
            placeholder="Short Bio"
            className="textarea w-full mb-2"
          />
          <textarea
            {...register("basicInfo.about")}
            placeholder="full about yourself"
            className="textarea w-full mb-2"
          />
          <input
            {...register("basicInfo.email")}
            placeholder="Email"
            className="input w-full mb-2"
          />
          <input
            {...register("basicInfo.phone")}
            placeholder="Phone Number"
            className="input w-full mb-2"
          />
          <input
            {...register("basicInfo.location")}
            placeholder="Location"
            className="input w-full mb-2"
          />
          <input
            {...register("basicInfo.profileImage")}
            placeholder="Profile Image URL"
            className="input w-full mb-2"
          />
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          {skillsArray.fields.map((item, idx) => (
            <div key={item.id} className="flex gap-2 mb-2 items-center">
              <input
                {...register(`skills.${idx}.name`)}
                placeholder="Skill Name"
                className="input flex-1"
              />
              <input
                {...register(`skills.${idx}.skillImageUrl`)}
                placeholder="Skill icon image URL"
                className="input flex-1"
              />
              <select
                {...register(`skills.${idx}.level`)}
                className="select w-40"
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
              <button
                type="button"
                onClick={() => skillsArray.remove(idx)}
                className="btn btn-outline bg-gray-300 border-none"
              >
                ❌
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => skillsArray.append({ name: "", level: "Beginner" })}
            className="btn text-white bg-gradient-to-r from-[#7405de] to-[#a626ec] border-none"
          >
            + Add Skill
          </button>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          {educationArray.fields.map((item, idx) => (
            <div key={item.id} className="border p-4 rounded mb-4 space-y-2">
              <input
                {...register(`education.${idx}.institute`)}
                placeholder="Institute Name"
                className="input w-full"
              />
              <input
                {...register(`education.${idx}.degree`)}
                placeholder="Degree"
                className="input w-full"
              />
              <input
                {...register(`education.${idx}.startYear`)}
                placeholder="Start Year"
                className="input w-full"
              />
              <input
                {...register(`education.${idx}.endYear`)}
                placeholder="End Year"
                className="input w-full"
              />
              <button
                type="button"
                onClick={() => educationArray.remove(idx)}
                className="btn btn-outline bg-gray-300 border-none"
              >
                Remove Education
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              educationArray.append({
                institute: "",
                degree: "",
                startYear: "",
                endYear: "",
              })
            }
            className="btn text-white bg-gradient-to-r from-[#7405de] to-[#a626ec] border-none"
          >
            + Add Education
          </button>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Projects</h2>
          {projectsArray.fields.map((item, idx) => (
            <div key={item.id} className="border p-4 rounded mb-4 space-y-2">
              <input
                {...register(`projects.${idx}.title`)}
                placeholder="Project Title"
                className="input w-full"
              />
              <textarea
                {...register(`projects.${idx}.description`)}
                placeholder="Description"
                className="textarea w-full"
              />
              <input
                {...register(`projects.${idx}.image`)}
                placeholder="image URL"
                className="input w-full"
              />
              <input
                {...register(`projects.${idx}.techStack`)}
                placeholder="Tech Stack (comma separated)"
                className="input w-full"
              />
              <input
                {...register(`projects.${idx}.githubUrl`)}
                placeholder="GitHub URL"
                className="input w-full"
              />
              <input
                {...register(`projects.${idx}.liveUrl`)}
                placeholder="Live URL"
                className="input w-full"
              />
              <button
                type="button"
                onClick={() => projectsArray.remove(idx)}
                className="btn btn-outline bg-gray-300 border-none"
              >
                Remove Project
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              projectsArray.append({
                title: "",
                description: "",
                githubUrl: "",
                liveUrl: "",
                techStack: "",
              })
            }
            className="btn text-white bg-gradient-to-r from-[#7405de] to-[#a626ec] border-none"
          >
            + Add Project
          </button>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Experience</h2>
          {experienceArray.fields.map((item, idx) => (
            <div key={item.id} className="border p-4 rounded mb-4 space-y-2">
              <input
                {...register(`experience.${idx}.company`)}
                placeholder="Company Name"
                className="input w-full"
              />
              <input
                {...register(`experience.${idx}.role`)}
                placeholder="Role/Position"
                className="input w-full"
              />
              <input
                {...register(`experience.${idx}.startDate`)}
                type="date"
                placeholder="Start Date"
                className="input w-full"
              />
              <input
                {...register(`experience.${idx}.endDate`)}
                type="date"
                placeholder="End Date"
                className="input w-full"
              />
              <textarea
                {...register(`experience.${idx}.description`)}
                placeholder="Description"
                className="textarea w-full"
              />
              <button
                type="button"
                onClick={() => experienceArray.remove(idx)}
                className="btn btn-outline bg-gray-300 border-none"
              >
                Remove Experience
              </button>
            </div>
          ))}
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
            className="btn text-white bg-gradient-to-r from-[#7405de] to-[#a626ec] border-none"
          >
            + Add Experience
          </button>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Certifications</h2>
          {certificationsArray.fields.map((item, idx) => (
            <div key={item.id} className="border p-4 rounded mb-4 space-y-2">
              <input
                {...register(`certifications.${idx}.title`)}
                placeholder="Certificate Title"
                className="input w-full"
              />
              <input
                {...register(`certifications.${idx}.issuer`)}
                placeholder="Issuer"
                className="input w-full"
              />
              <input
                {...register(`certifications.${idx}.issueDate`)}
                type="date"
                placeholder="Issue Date"
                className="input w-full"
              />
              <input
                {...register(`certifications.${idx}.certificateUrl`)}
                placeholder="Certificate URL"
                className="input w-full"
              />
              <button
                type="button"
                onClick={() => certificationsArray.remove(idx)}
                className="btn btn-outline bg-gray-300 border-none"
              >
                Remove Certification
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              certificationsArray.append({
                title: "",
                issuer: "",
                issueDate: "",
                certificateUrl: "",
              })
            }
            className="btn text-white bg-gradient-to-r from-[#7405de] to-[#a626ec] border-none"
          >
            + Add Certification
          </button>
        </section>

        {/* Blogs */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Blogs</h2>
          {blogsArray.fields.map((item, idx) => (
            <div key={item.id} className="border p-4 rounded mb-4 space-y-2">
              <input
                {...register(`blogs.${idx}.title`)}
                placeholder="Blog Title"
                className="input w-full"
              />
              <input
                {...register(`blogs.${idx}.link`)}
                placeholder="Blog URL"
                className="input w-full"
              />
              <textarea
                {...register(`blogs.${idx}.description`)}
                placeholder="Short Description"
                className="textarea w-full"
              />
              <button
                type="button"
                onClick={() => blogsArray.remove(idx)}
                className="btn btn-outline bg-gray-300 border-none"
              >
                Remove Blog
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              blogsArray.append({ title: "", link: "", description: "" })
            }
            className="btn text-white bg-gradient-to-r from-[#7405de] to-[#a626ec] border-none"
          >
            + Add Blog
          </button>
        </section>

        {/* Social Links */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Social Links</h2>
          <input
            {...register("socialLinks.github")}
            placeholder="GitHub URL"
            className="input w-full mb-2"
          />
          <input
            {...register("socialLinks.linkedin")}
            placeholder="LinkedIn URL"
            className="input w-full mb-2"
          />
          <input
            {...register("socialLinks.leetcode")}
            placeholder="LeetCode URL"
            className="input w-full mb-2"
          />
          <input
            {...register("socialLinks.portfolio")}
            placeholder="Personal Website"
            className="input w-full mb-2"
          />
        </section>

        <button type="submit" className="btn btn-primary w-full mt-6 bg-gradient-to-r from-[#7405de] to-[#a626ec]">
          Save Portfolio
        </button>
      </form>

  
      <div className="flex-1 sticky top-6 max-h-screen overflow-auto bg-gray-50 p-6 rounded-lg shadow">
        <PortfolioPreview
          data={{
            fullName: formData.basicInfo.fullName || "Your Name",
            title: formData.basicInfo.title || "Professional Title",
            bio: formData.basicInfo.bio || "A short bio will show here.",
            about:formData.basicInfo.about || "enter your bio",
            profileImage:
              formData.basicInfo.profileImage ||
              "https://www.shutterstock.com/image-vector/avatar-gender-neutral-silhouette-vector-600nw-2470054311.jpg",
            skills: formData.skills?.filter((s) => s.name) || [],
            projects:
              formData.projects
                ?.map((p) => ({
                  image: p.image,
                  title: p.title,
                  description: p.description,
                  techStack: p.techStack
                    ? p.techStack.split(",").map((t) => t.trim())
                    : [],
                  liveLink: p.liveUrl,
                  githubLink: p.githubUrl,
                }))
                .filter((p) => p.title) || [],
            education:
              formData.education
                ?.map((e) => ({
                  degree: e.degree,
                  institution: e.institute,
                  year: e.endYear,
                }))
                .filter((e) => e.degree) || [],
            experience: formData.experience || [],
            certifications: formData.certifications || [],
            socials: formData.socialLinks || {},
          }}
        />
      </div>
    </div>
  );
};

export default PortfolioBuilder;
