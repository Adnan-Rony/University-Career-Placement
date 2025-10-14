import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { data } from "../lib/templatedata";

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
  header2: {
    fontSize: 12,
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
});
const personal = {
  email: "tamjidrazin@gmail.com",
  phone: "01212121211",
  portfolio: "tamjidportfolio.com",
  address: "Uttara,Dhaka",
};
const defaultPersonal = {
  name: "Name not provided",
  email: "Email not provided",
  phone: "Phone not provided",
  location: "Location not provided",
  linkedin: "LinkedIn not provided",
  portfolio: "Portfolio not provided",
  summary: "Summary not provided",
};
export const PdfEngineerTemp1 = ({ resumeData }) => {
const { about = {}, education = [], skills = [] } = resumeData || {};

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
    <View style={styles.section}>
          <Text style={styles.header}>{"Tamjid Ahmed"}</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: 4,
            }}
          >
            <Text style={{ fontSize: 12, marginRight: 6 }}>
              {personal.email || "Email not provided"} {"| "}
            </Text>
            <Text style={{ fontSize: 12, marginRight: 6 }}>
              {personal.phone || "Phone not provided"} {"| "}
            </Text>
            <Text style={{ fontSize: 12, marginRight: 6 }}>
              {personal.location || "Location not provided"} {"| "}
            </Text>
            <Text style={{ fontSize: 12 }}>
              {personal.portfolio || "Portfolio not provided"}
            </Text>
          </View>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>Summary</Text>

          <Text style={styles.text}>
            Frontend Developer passionate about building responsive,
            user-friendly, and accessible applications. Skilled in React.js,
            JavaScript, and Tailwind CSS with experience in API integration,
            reusable components, and performance optimization.
          </Text>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>Work Experience</Text>
          <Text style={styles.text}>
            Frontend Developer - TechCorp (2021 - 2023)
          </Text>
          <Text style={styles.text}>
            Software Engineer - CodeWorks (2023 - Present)
          </Text>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>Education</Text>
          <Text style={styles.text}>
            B.Sc. in Computer Science - Daffodil University (2020)
          </Text>
          <Text style={styles.text}>
            M.Sc. in Software Engineering - ABC Institute (2023)
          </Text>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>Skills</Text>
          <Text style={styles.text}>
               {skills.length > 0 ? (
            <Text style={styles.text}>{skills.join(", ")}</Text>
          ) : (
            <Text style={styles.text}>No skills provided.</Text>
          )}
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
};
