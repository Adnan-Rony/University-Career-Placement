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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
         
          <h1 className="text-center text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
            Resume <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Preview</span>
          </h1>
          <p className="text-center text-lg text-gray-600">Review your resume before downloading or saving</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 lg:p-8">
            {/* Left Sidebar - Actions */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions</h3>
                
                {/* Download Button */}
                <PDFDownloadLink
                  key={refreshKey}
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 text-base font-semibold rounded-lg text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-md hover:shadow-lg transition-all duration-200"
                  document={
                    <PdfTemplate key={refreshKey} resumeData={resumeData} />
                  }
                  fileName={`${about?.name || "resume"}.pdf`}
                >
                  {({ loading }) => (
                    <div className="flex items-center justify-center gap-2 w-full">
                      <Download size={20} />
                      <span>{loading ? "Preparing..." : "Download PDF"}</span>
                    </div>
                  )}
                </PDFDownloadLink>

                {/* Save Button */}
                <div className="pt-2 border-t border-gray-200">
                  <DownloadResume />
                </div>

                {/* Info Box */}
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-900 font-medium mb-2">💡 Quick Tip</p>
                  <p className="text-xs text-blue-700">
                    Download or save your resume. You can always edit it later from your profile.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Preview */}
            <div className="lg:col-span-2">
              <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50 p-4">
                <div className="bg-white rounded">
                  <PreviewTemplate resumeData={resumeData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
