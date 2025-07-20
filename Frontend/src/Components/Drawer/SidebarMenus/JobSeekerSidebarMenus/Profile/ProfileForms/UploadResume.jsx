
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ProfileContext } from '../../../../../../Context/ProfileProvider';
import { Upload } from 'lucide-react';

export const UploadResume  = () => {
  const { profileData, updateProfileSection } = useContext(ProfileContext);
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      resume: profileData.education.resume || null // Assuming resume is stored under education section
    }
  });

  const onSubmit = (data) => {
    updateProfileSection('education', { ...profileData.education, resume: data.resume });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue('resume', file);
    }
  };

  const currentResume = watch('resume');

  return (
    <div className="p-6 flex">
      <div className="w-2/6">
        <h1 className="text-2xl font-bold">Resume</h1>
        <p className="text-gray-500 mb-4">
          Upload your recent resume or CV
        </p>
        <p className="text-gray-500 mb-4">
          Upload your most up-to-date resume
        </p>
        <p className="text-gray-500">File types: DOC, DOCX, PDF, TXT</p>
      </div>
      <div className="w-full px-8">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full  p-4">
          {currentResume && typeof currentResume === 'object' ? (
            <div className="mb-4">
              <p>{currentResume.name}</p>
              <a href={URL.createObjectURL(currentResume)} target="_blank" rel="noopener noreferrer" className="text-blue-500 mr-4">
                View your resume
              </a>
              <button
                type="button"
                onClick={() => setValue('resume', null)}
                className="text-blue-500"
              >
                Remove your resume
              </button>
            </div>
          ) : (
            <div className="mb-4">
              <p>ResumeOfTanjidAhmed.pdf</p>
              <a href="#" className="text-blue-500 mr-4">View your resume or upload a new one below</a>
            </div>
          )}
          <div className="flex items-center border-dashed border-2 p-4">
            <input
              type="file"
              accept=".doc,.docx,.pdf,.txt"
              onChange={handleFileChange}
              className="hidden"
              {...register('resume')}
              id="resume-upload"
            />
            <label htmlFor="resume-upload" className="cursor-pointer
              flex items-center flex-col ">
              <span className='text-r-primary' role="img" aria-label="upload">
                <Upload />
              </span>
              <span className="ml-2">Upload new file</span>
            </label>
          </div>
          <button type="submit" className="btn bg-r-accent text-white mt-4">Save</button>
        </form>
      </div>
    </div>
  );
};