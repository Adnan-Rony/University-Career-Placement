import React from "react";
import { useResumeContext } from "../../../Context/ResumeProvider";
import { useCurrentUser } from "../../../hooks/useAuth";
import { Save } from "lucide-react";
import { useCreateResume } from "../../../hooks/useResume";

export const DownloadResume = () => {
  const {
    selectedtemplate,
    resumeData: resumeinfos,
    isPending,
  } = useResumeContext();
  const { data } = useCurrentUser();
  const { mutate: createResume, isPending:isCreating } = useCreateResume();
  const handleDownload = () => {
    const resumeData = {
      userId: data?.user._id,
      templateId: selectedtemplate.id,
      templateTitle: selectedtemplate.title,
      ...resumeinfos,
    };
    createResume(resumeData);
  };

  return (
    <button onClick={handleDownload} 
    disabled={isCreating}
    className="btn flex btn-lg w-full">
      <span>
        <Save />
      </span>
      <span>{isCreating  ? "Saving..." : "Save Resume"}</span>
    </button>
  );
};
