import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    padding: 0,
  },
  maincontainer: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#1F2937",
    padding: 30,
    color: "#FFFFFF",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
    letterSpacing: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "light",
    marginBottom: 12,
  },
  contactInfo: {
    fontSize: 9,
    color: "#D1D5DB",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
  },
  section: {
    marginBottom: 20,
  },
  sectionBox: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F3F4F6",
    padding: 16,
    borderRadius: 4,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 10,
    fontStyle: "italic",
  },
  summaryText: {
    fontSize: 9,
    lineHeight: 1.6,
    color: "#374151",
    textAlign: "justify",
  },
  skillsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  skillColumn: {
    width: "30%",
  },
  skillItem: {
    fontSize: 9,
    color: "#374151",
    marginBottom: 6,
  },
  experienceItem: {
    marginBottom: 15,
    display: "flex",
    flexDirection: "column",
  },
  experienceHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
    fontWeight: "bold",
  },
  jobTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1F2937",
  },
  dateRange: {
    fontSize: 8,
    fontWeight: "semibold",
    color: "#4B5563",
  },
  bulletList: {
    marginLeft: 10,
    display: "flex",
    flexDirection: "column",
  },
  bulletItem: {
    flexDirection: "row",
    marginBottom: 4,
  },
  bullet: {
    fontSize: 8,
    marginRight: 5,
    color: "#374151",
  },
  bulletText: {
    fontSize: 9,
    color: "#374151",
    lineHeight: 1.4,
    flex: 1,
  },
  educationItem: {
    marginBottom: 12,
  },
  degreeTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1F2937",
  },
  institution: {
    fontSize: 9,
    color: "#374151",
    marginBottom: 4,
  },
  additionalItem: {
    fontSize: 9,
    color: "#374151",
    marginBottom: 6,
    lineHeight: 1.4,
  },
  label: {
    fontWeight: "bold",
  },
});

export const PdfDesignerTemp1 = ({ resumeData }) => {
    const { about, education, experience, skills, projects } = resumeData || {};
  return (
 <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.maincontainer}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.name}>{about?.name || "Your Name"}</Text>
            <Text style={styles.title}>{about?.portfolio || "Your Profession"}</Text>
            <Text style={styles.contactInfo}>
              {about?.location ? `${about.location} | ` : ""}
              {about?.email ? `${about.email} | ` : ""}
              {about?.linkedin || ""}
            </Text>
          </View>

          <View style={styles.contentContainer}>
            {/* Summary */}
            {about?.summary && (
              <View style={styles.section}>
                <View style={styles.sectionBox}>
                  <Text style={styles.sectionTitle}>SUMMARY</Text>
                  <Text style={styles.summaryText}>{about.summary}</Text>
                </View>
              </View>
            )}

            {/* Skills */}
            {skills?.length > 0 && (
              <View style={styles.section}>
                <View style={styles.sectionBox}>
                  <Text style={styles.sectionTitle}>SKILLS</Text>
                  <View style={styles.skillsContainer}>
                    {skills.map((skill, i) => (
                      <Text key={i} style={styles.skillItem}>
                        • {skill.name} — {skill.level}
                      </Text>
                    ))}
                  </View>
                </View>
              </View>
            )}

            {/* Experience */}
            {experience?.length > 0 && (
              <View style={styles.section}>
                <View style={styles.sectionBox}>
                  <Text style={styles.sectionTitle}>EXPERIENCE</Text>
                  {experience.map((exp, i) => (
                    <View key={i} style={styles.experienceItem}>
                      <View style={styles.experienceHeader}>
                        <Text style={styles.jobTitle}>
                          {exp.position} — {exp.company}
                        </Text>
                        <Text style={styles.dateRange}>
                          {exp.startYear} - {exp.endYear}
                        </Text>
                      </View>
                      <View style={styles.bulletList}>
                        {exp.description?.map((desc, j) => (
                          <View key={j} style={styles.bulletItem}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.bulletText}>{desc}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {/* Education */}
            {education?.length > 0 && (
              <View style={styles.section}>
                <View style={styles.sectionBox}>
                  <Text style={styles.sectionTitle}>EDUCATION</Text>
                  {education.map((edu, i) => (
                    <View key={i} style={styles.educationItem}>
                      <View style={styles.experienceHeader}>
                        <Text style={styles.degreeTitle}>{edu.degree}</Text>
                        <Text style={styles.dateRange}>
                          {edu.startYear} - {edu.endYear}
                        </Text>
                      </View>
                      <Text style={styles.institution}>{edu.institution}</Text>
                      {edu.grade && (
                        <Text style={styles.bulletText}>Grade: {edu.grade}</Text>
                      )}
                    </View>
                  ))}
                </View>
              </View>
            )}

            {/* Projects */}
            {projects?.length > 0 && (
              <View style={styles.section}>
                <View style={styles.sectionBox}>
                  <Text style={styles.sectionTitle}>PROJECTS</Text>
                  {projects.map((p, i) => (
                    <Text key={i} style={styles.additionalItem}>
                      • {p.name || "Project"} — {p.description || ""}
                    </Text>
                  ))}
                </View>
              </View>
            )}

            {/* Additional Information */}
{/* Additional Information */}
{resumeData.additional && (
  <View style={styles.section}>
    <View style={styles.sectionBox}>
      <Text style={styles.sectionTitle}>ADDITIONAL INFORMATION</Text>

      {/* Languages */}
      {resumeData.additional.languages && (
        <Text style={styles.additionalItem}>
          <Text style={styles.label}>Languages: </Text>
          {resumeData.additional.languages}
        </Text>
      )}

      {/* Certifications */}
      {resumeData.additional.certifications && (
        <Text style={styles.additionalItem}>
          <Text style={styles.label}>Certifications: </Text>
          {resumeData.additional.certifications}
        </Text>
      )}

      {/* Awards / Activities */}
      {resumeData.additional.awards && (
        <Text style={styles.additionalItem}>
          <Text style={styles.label}>Awards/Activities: </Text>
          {resumeData.additional.awards}
        </Text>
      )}
    </View>
  </View>
)}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PdfDesignerTemp1;
