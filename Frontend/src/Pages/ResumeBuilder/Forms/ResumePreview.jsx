import React, { useEffect, useState } from "react";
import { useResumeContext } from "../../../Context/ResumeProvider";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";

import { PdfEngineerTemp1 } from "../PdfTemplates/PdfEngineerTemp1";
import { Download, Save } from "lucide-react";
import { DownloadResume } from "../ResumeUi/DownloadResume";

export default function ResumePreview() {
  const [refreshKey, setRefreshKey] = useState(0);
  const { selectedtemplate, resumeData } = useResumeContext();
  useEffect(() => {
    setRefreshKey((prev) => prev + 1);
  }, [resumeData]);

  if (!selectedtemplate) return <p>No template selected.</p>;
  const PreviewTemplate = selectedtemplate.component;

  const PdfTemplate = selectedtemplate.pdfComponent;
  const { about, education, experience, skills, projects } = resumeData;

  return (
    <div className="min-h-screen bg-gray-50 
    py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
         <h2 className="text-2xl font-bold text-gray-900">Resume Preview</h2>
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-start  gap-4
           p-4 
           
           ">
               {/* Left Column */}
            <div className="flex flex-col space-y-2 w-full 
             lg:col-span-3">
              <PDFDownloadLink
                key={refreshKey}
                className="inline-flex
                 items-center border border-transparent
                  text-base font-medium
                   rounded-md shadow-sm text-white
                    bg-purple-600 hover:bg-purple-700
                     focus:outline-none focus:ring-2
                      focus:ring-offset-2 focus:ring-purple-500
                       transition-colors duration-200 btn btn-lg"
                document={
                  <PdfTemplate key={refreshKey} resumeData={resumeData} />
                }
                fileName={`${about?.name || "resume"}.pdf`}
              >
                {({ loading }) => (
                  <div className="flex items-center
                   space-x-2 ">
             <Download />
                    <span className="">
                      {loading ? "Preparing PDF..." : "Download Resume"}
                    </span>
                  </div>
                )}
              </PDFDownloadLink>

             <div>
               <DownloadResume />
             </div>
            </div>
            {/* Right Column */}
            <div className="lg:col-span-9 
            w-full overflow-hidden rounded-lg
            bg-white ">
              <div className="">
                <PreviewTemplate resumeData={resumeData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
