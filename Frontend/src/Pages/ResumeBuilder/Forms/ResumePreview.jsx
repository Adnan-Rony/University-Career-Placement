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
    <div className="bg-gray-300 border flex flex-col justify-center items-center">
      <div className="flex ">
        <PDFDownloadLink  key={refreshKey}
          className="btn text-white bg-purple-700 px-4 py-2 rounded-lg self-center"
          document={<PdfTemplate key={refreshKey} resumeData={resumeData} />}
          fileName={`${about?.name || "resume"}.pdf`}
        >
          {({ loading }) => (loading ? "Preparing PDF..." : "Download Resume")}
        </PDFDownloadLink>
        <div className="">
          {/*  PDF Preview  */}
           <PDFViewer >
              <PdfTemplate resumeData={resumeData} />
            </PDFViewer>
        </div>
      </div>
    </div>
  );
}
