import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Default styles
const styles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingLeft: 35,
    paddingRight: 35,
    fontFamily: "Helvetica",
    backgroundColor: "#fff",
    fontSize: 12,
    lineHeight: 1.5,
    display: "flex",
    flexDirection: "column",
  },
  section: {
    marginBottom: 15,
    display: "flex",
    flexDirection: "column",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#7932a8",
    textAlign: "center",
  },
  subHeader: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#7932a8",
  },
  text: {
    fontSize: 12,
  },
  contactInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: 4,
  },
  contactText: {
    fontSize: 12,
    marginRight: 6,
  },
});

const defaultPersonal = {
  name: "Name not provided",
  email: "Email not provided",
  phone: "Phone not provided",
  location: "Location not provided",
  portfolio: "Portfolio not provided",
  summary: "Summary not provided",
};

export const PdfEngineerTemp1 = ({ resumeData }) => {
  const {
    about = {},
    education = [],
    experience = [],
    skills = [],
    projects = [],
  } = resumeData || {};

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.section}>
          <Text style={styles.header}>
            {about.name || defaultPersonal.name}
          </Text>
          <View style={styles.contactInfo}>
            <Text style={styles.contactText}>
              {about.email || defaultPersonal.email} {" | "}
            </Text>
            <Text style={styles.contactText}>
              {about.phone || defaultPersonal.phone} {" | "}
            </Text>
            <Text style={styles.contactText}>
              {about.location || defaultPersonal.location} {" | "}
            </Text>
            <Text style={styles.contactText}>
              {about.portfolio || defaultPersonal.portfolio}
            </Text>
          </View>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>Summary</Text>
          <Text style={styles.text}>
            {about.summary || defaultPersonal.summary}
          </Text>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>Work Experience</Text>
          {experience.length > 0 ? (
            experience.map((exp, i) => (
              <View key={i} style={{ marginBottom: 4 }}>
                <Text style={styles.text}>
                  {exp.position || "Position"} - {exp.company || "Company"} (
                  {exp.startYear || "----"} - {exp.endYear || "----"})
                </Text>
                <Text style={styles.text}>{exp.description || ""}</Text>
              </View>
            ))
          ) : (
            <>
              <Text style={styles.text}>
                Frontend Developer - TechCorp (2021 - 2023)
              </Text>
              <Text style={styles.text}>
                Software Engineer - CodeWorks (2023 - Present)
              </Text>
            </>
          )}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>Education</Text>
          {education.length > 0 ?
           (
            education.map((edu, i) => (
           <View key={i} style={{ marginBottom: 6 }}>
          {/* Row: Degree and Year */}
          <View
            style={{
              display:"flex",
              flexDirection: "row",
              justifyContent: "space-between",
              fontWeight: "bold"
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>
              {edu.degree || "Degree"}
            </Text>
            <Text style={{ fontSize: 12 }}>
              ({edu.startYear || "----"} - {edu.endYear || "----"})
            </Text>
          </View>

          {/* Column: Institution */}
          <Text style={{ fontSize: 12, marginTop: 2 }}>
            {edu.institution || "Institution"}
          </Text>
        </View>
            ))
          ) 
          
          : (
            <>
              <Text style={styles.text}>
                B.Sc. in Computer Science - Daffodil University (2020)
              </Text>
              <Text style={styles.text}>
                M.Sc. in Software Engineering - ABC Institute (2023)
              </Text>
            </>
          )}
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>Skills</Text>
          <Text style={styles.text}>
            {skills.length > 0
              ? skills.map((s) => s.name || s).join(", ")
              : "No skills provided."}
          </Text>
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>Projects</Text>
          {projects.length > 0 ? (
            projects.map((proj, index) => (
                 <View
        key={index}
        style={{ 
          flexDirection: "column", 
         
          marginBottom: 4 
        }}
      >
        <Text style={{ fontSize: 13, fontWeight: "bold"}}>
          {proj.title || "Project Title"}
        </Text>
        <Text style={{ fontSize: 12}}>
          {proj.description || "No description"}
        </Text>
        <Text style={{ fontSize: 12, color: "blue" }}>
          {proj.link || "No link"}
        </Text>
      </View>
            ))
          ) : (
            <>
              <Text style={styles.text}>
                Portfolio Website - A responsive personal portfolio built with
                React and Tailwind CSS.
              </Text>
              <Text style={styles.text}>
                Task Tracker App - A full-stack MERN application for managing
                daily tasks.
              </Text>
            </>
          )}
        </View>
      </Page>
    </Document>
  );
};