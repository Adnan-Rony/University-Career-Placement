import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import React from "react";

// Styles for the PDF
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    padding: 30,
    maxWidth: 600,
  },
  headerBanner: {
    height: 80,
    backgroundColor: "#f97316", // orange-500
    marginBottom: 14,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  name: {
    fontSize: 28,
    fontWeight: "extrabold",
    color: "#2563eb", // blue-600
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    color: "black",
  },
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    color: "#1e40af", // blue-800
    fontWeight: 600,
    gap: 4,
  },
  contactItem: {
    fontSize: 12,
  },
  portfolioLink: {
    fontSize: 12,
    color: "#1e40af",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#1e3a8a", // blue-800
  },
  sectionContainer: {
    marginBottom: 24,
  },
  experienceContainer: {
    marginLeft: 16,
  },
  experienceItem: {
    marginBottom: 16,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
  },
  company: {
    fontSize: 11,
    fontWeight: 500,
    marginBottom: 4,
  },
  date: {
    fontSize: 10,
    color: "#6b7280", // gray-600
    fontWeight: 500,
    marginBottom: 8,
  },
  bulletList: {
    marginLeft: 16,
  },
  bulletItem: {
    fontSize: 10,
    color: "#374151", // gray-700
    marginBottom: 4,
    lineHeight: 1.4,
  },
  twoColumnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  leftColumn: {
    width: "48%",
  },
  rightColumn: {
    width: "48%",
  },
  educationItem: {
    marginLeft: 16,
    marginBottom: 12,
  },
  educationDegree: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
  },
  educationInfo: {
    fontSize: 10,
    color: "#6b7280", // gray-600
    marginBottom: 4,
  },
  skillsList: {
    marginLeft: 16,
  },
  skillItem: {
    fontSize: 10,
    color: "#374151", // gray-700
    marginBottom: 4,
  },
  projectsContainer: {
    marginLeft: 16,
  },
  projectItem: {
    marginBottom: 12,
  },
  projectTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#374151",
  },
  projectDescription: {
    fontSize: 10,
    color: "#374151",
    marginLeft: 16,
    lineHeight: 1.4,
  },
});

export const PdfStudentTemp2 = ({ resumeData }) => {
  const { about, education, experience, skills, projects } = resumeData || {};
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Banner */}
        <View style={styles.headerBanner} />

        {/* Header Section */}
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.name}>{about?.name || "Your Name"}</Text>
            <Text style={styles.title}>{about?.portfolio || "Student"}</Text>
          </View>

          <View style={styles.contactContainer}>
            {about?.linkedin && (
              <Text style={styles.contactItem}>
                <Link src={about.linkedin}>{about.linkedin}</Link>
              </Text>
            )}
            {about?.phone && (
              <Text style={styles.contactItem}>{about.phone}</Text>
            )}
            {about?.email && (
              <Text style={styles.contactItem}>
                <Link src={`mailto:${about.email}`}>{about.email}</Link>
              </Text>
            )}
            {about?.portfolio && (
              <Text style={styles.portfolioLink}>
                <Link src={about.portfolio}>Portfolio</Link>
              </Text>
            )}
          </View>
        </View>

        {/* Experience Section */}
        {experience?.length > 0 && (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Experience</Text>
            <View style={styles.experienceContainer}>
              {experience.map((exp, i) => (
                <View key={i} style={styles.experienceItem}>
                  <Text style={styles.jobTitle}>{exp.position}</Text>
                  <Text style={styles.company}>{exp.company}</Text>
                  <Text style={styles.date}>
                    {exp.startYear} - {exp.endYear}
                  </Text>
                  {exp.description?.length > 0 && (
                    <View style={styles.bulletList}>
                      {exp.description.map((desc, j) => (
                        <Text key={j} style={styles.bulletItem}>
                          • {desc}
                        </Text>
                      ))}
                    </View>
                  )}
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Education + Skills */}
        <View style={styles.twoColumnContainer}>
          {/* Education */}
          <View style={styles.leftColumn}>
            <Text style={styles.sectionTitle}>Education</Text>
            {education?.map((edu, i) => (
              <View key={i} style={styles.educationItem}>
                <Text style={styles.educationDegree}>{edu.degree}</Text>
                <Text style={styles.educationInfo}>
                  {edu.institution}, {edu.endYear}
                </Text>
                {edu.grade && (
                  <Text style={styles.bulletItem}>• Grade: {edu.grade}</Text>
                )}
              </View>
            ))}
          </View>

          {/* Skills */}
          {skills?.length > 0 && (
            <View style={styles.rightColumn}>
              <Text style={styles.sectionTitle}>Skills</Text>
              <View style={styles.skillsList}>
                {skills.map((skill, i) => (
                  <Text key={i} style={styles.skillItem}>
                    • {skill.name} — {skill.level}
                  </Text>
                ))}
              </View>
            </View>
          )}
        </View>

        {/* Projects Section */}
        {projects?.length > 0 && (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Projects</Text>
            <View style={styles.projectsContainer}>
              {projects.map((p, i) => (
                <View key={i} style={styles.projectItem}>
                  <Text style={styles.projectTitle}>{p.title}</Text>
                  <Text style={styles.projectDescription}>
                    • {p.description}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
};