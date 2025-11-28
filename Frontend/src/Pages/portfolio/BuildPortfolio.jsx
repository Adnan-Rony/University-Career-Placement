import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { UseCreatePortfolio } from "../../hooks/usePortfolio";
import SocialLinks from "./Forms/SocialLinks";
import Blogs from "./Forms/Blogs";
import Certifications from "./Forms/Certifications";
import Experience from "./Forms/Experience";
import Projects from "./Forms/Projects";
import Education from "./Forms/Education";
import Skills from "./Forms/Skills";
import BasicInfo from "./Forms/BasicInfo";
import { PortfolioNavigation } from "./Forms/PortfolioNavigation";
import { usePortfolio } from "../../Context/PortfolioProvider";

const steps = [
  "Basic Info",
  "Skills",
  "Education",
  "Projects",
  "Experience",
  "Certifications",
  "Blogs",
  "Social Links",
];

const BuildPortfolio = () => {
  const [step, setStep] = useState(0);
const { updatePortfolioData,portfolioData } = usePortfolio();
const   defaultValues={
      basicInfo: {
        name: "",
        title: "",
        bio: "",
        about: "",
        email: "",
        phone: "",
        location: "",
        picture: "",
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
      education: [{ college: "", degree: "", startYear: "", endYear: "" }],
      experience: [
        { company: "", role: "", startDate: "", endDate: "", description: "" },
      ],
      certifications: [
        { title: "", issuer: "", issueDate: "", certificateUrl: "" },
      ],
      blogs: [{ title: "", link: "", description: "" }],
      socialLinks: { github: "", linkedin: "", leetcode: "", portfolio: "" },
    }
  const {
    register,
    control,
    handleSubmit,
    watch,reset,
    formState: { errors },
  } = useForm({
  defaultValues
  });

  const { mutate } = UseCreatePortfolio();

  const skillsArray = useFieldArray({ control, name: "skills" });
  const projectsArray = useFieldArray({ control, name: "projects" });
  const educationArray = useFieldArray({ control, name: "education" });
  const experienceArray = useFieldArray({ control, name: "experience" });
  const certificationsArray = useFieldArray({
    control,
    name: "certifications",
  });
  const blogsArray = useFieldArray({ control, name: "blogs" });

useEffect(() => {
  if (portfolioData) {
    reset({...defaultValues,       // always keep structure
      ...portfolioData,  }); 
  }
}, [portfolioData, reset]);

  const formData = watch();

  const onSubmit = (data) => {
   
    mutate(data);
  };

  const nextStep = () =>
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="flex gap-6  mx-auto p-6 overflow-hidden  max-w-7xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-1 space-y-8  pr-4"
      >
        <h1 className="text-3xl font-bold mb-4">Portfolio Builder</h1>

        {/* Stepper */}
        <div className="flex flex-wrap gap-2 mb-8 justify-start">
          {steps.map((label, index) => (
            <div
              key={index}
              className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-medium whitespace-nowrap ${
                index === step
                  ? "bg-gradient-to-br from-purple-600 to-indigo-600 text-white border border-purple-600"
                  : "bg-gray-100 text-gray-600 border border-gray-300"
              }`}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Step Rendering */}
        {step === 0 && <BasicInfo portfolioData={portfolioData} register={register} />}
        {step === 1 && <Skills register={register} skillsArray={skillsArray} />}
        {step === 2 && (
          <Education register={register} educationArray={educationArray} />
        )}
        {step === 3 && (
          <Projects register={register} projectsArray={projectsArray} />
        )}
        {step === 4 && (
          <Experience register={register} experienceArray={experienceArray} />
        )}
        {step === 5 && (
          <Certifications
            register={register}
            certificationsArray={certificationsArray}
          />
        )}
        {step === 6 && <Blogs register={register} blogsArray={blogsArray} />}
        {step === 7 && <SocialLinks register={register} />}

        {/* Navigation */}

        <PortfolioNavigation
          step={step}
          steps={steps}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      </form>
    </div>
  );
};

export default BuildPortfolio;
