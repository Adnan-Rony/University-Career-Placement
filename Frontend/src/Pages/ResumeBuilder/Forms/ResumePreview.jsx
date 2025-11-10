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
import { Save } from "lucide-react";

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
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex flex-col items-center space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Resume Preview</h2>
            <div className="flex items-center space-x-4">
              <PDFDownloadLink key={refreshKey}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
                document={<PdfTemplate key={refreshKey} resumeData={resumeData} />}
                fileName={`${about?.name || "resume"}.pdf`}
              >
                {({ loading }) => (
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span>{loading ? "Preparing PDF..." : "Download Resume"}</span>
                  </div>
                )}
              </PDFDownloadLink>

              <button className="btn flex btn-lg">
                <span><Save /></span>
                <span>Save Resume</span>
              </button>
            </div>
            <div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white">
              {/*  PDF Preview  */}
              {/* <PDFViewer className="w-full h-[800px]">
                <PdfTemplate resumeData={resumeData} />
              </PDFViewer> */}
              <div className="p-4">
                <PreviewTemplate resumeData={resumeData}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
