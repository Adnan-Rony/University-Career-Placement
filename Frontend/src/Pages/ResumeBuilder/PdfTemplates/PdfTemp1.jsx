import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { data } from "../lib/templatedata";

// Default styles
const defaultStyles = StyleSheet.create({
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
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
  },
});

export default function PdfTemp1({resumeData}) {
  const styles = defaultStyles;
 // ✅ Destructure resumeData safely with defaults
  const {
    about = {},
    education = [],
    experience = [],
    skills = [],
    projects = [],
  } = resumeData || {};

    const {
    name = "John Doe",
    email = "johndoe@example.com",
    phone = "+1 (000) 000-0000",
    location = "New York, USA",
    linkedin = "linkedin.com/in/johndoe",
    portfolio = "johndoe.dev",
    summary = "A passionate developer skilled in modern web technologies.",
  } = about;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.section}>
          <Text style={styles.header}>John Doe</Text>
          <Text style={styles.text}>Full Stack Developer</Text>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>Education</Text>
          <Text style={styles.text}>
            B.Sc. in Computer Science - XYZ University (2020)
          </Text>
          <Text style={styles.text}>
            M.Sc. in Software Engineering - ABC Institute (2023)
          </Text>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>Experience</Text>
          <Text style={styles.text}>
            Frontend Developer - TechCorp (2021 - 2023)
          </Text>
          <Text style={styles.text}>
            Software Engineer - CodeWorks (2023 - Present)
          </Text>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>Skills</Text>
          <Text style={styles.text}>
            JavaScript, React, Node.js, Express, MongoDB, Tailwind CSS, Git
          </Text>
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>Projects</Text>
          <Text style={styles.text}>
            Portfolio Website: A responsive personal portfolio built with React
            and Tailwind CSS.
          </Text>
          <Text style={styles.text}>
            Task Tracker App: A full-stack MERN application for managing daily
            tasks.
          </Text>
        </View>
      </Page>
    </Document>
  );
}
