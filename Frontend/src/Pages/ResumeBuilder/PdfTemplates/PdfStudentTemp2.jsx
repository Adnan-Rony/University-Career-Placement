import { Page, Text, View, Document, StyleSheet, Link } from "@react-pdf/renderer";
import React from "react";

// Styles for the PDF
const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    padding: 30,
    maxWidth: 600,
  },
  headerBanner: {
    height: 80,
    backgroundColor: '#f97316', // orange-500
    marginBottom: 14,
  },
  headerContainer: {
    display: 'flex',
    flexDirection:"row",
    justifyContent: 'space-between',
    marginBottom: 24,
    marginTop: 24,
  },
  name: {
    fontSize: 28,
    fontWeight: 'extrabold',
    color: '#2563eb', // blue-600
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    color: 'black',
  },
  contactContainer: {
    display: 'flex',
    flexDirection: 'column',
    color: '#1e40af', // blue-800
    fontWeight: 600,
    gap: 4,
  },
  contactItem: {
    fontSize: 12,
  },
  portfolioLink: {
    fontSize: 12,
    color: '#1e40af',

  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom:6,
    color: '#1e3a8a', // blue-800
  
  },
  experienceContainer: {
    marginLeft: 16,
    marginBottom: 24,
    gap: 16,
  },
  jobTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  company: {
    fontSize: 10,
    fontWeight: 500,
    marginBottom: 4,
  },
  date: {
    fontSize: 10,
    color: '#6b7280', // gray-600
    fontWeight: 500,
    marginBottom: 8,
  },
  bulletList: {
    marginLeft: 16,
    marginBottom: 8,
  },
  bulletItem: {
    fontSize: 10,
    color: '#374151', // gray-700
    marginBottom: 4,
  },
  twoColumnContainer: {
    display: 'flex',
    flexDirection:"row",
    justifyContent: "space-between"
  },
  leftColumn: {
    width: '50%',
  },
  rightColumn: {
    width: '50%',
  },
  educationDegree: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  educationInfo: {
    fontSize: 10,
    color: '#6b7280', // gray-600
    marginBottom: 8,
  },
  skillsList: {
    marginLeft: 16,
  },
  skillItem: {
    fontSize: 12,
    color: '#374151', // gray-700
    marginBottom: 4,
  },
  listDisc: {
    listStyleType: 'disc',
    marginLeft: 16,
  },
});

export const PdfStudentTemp2 = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Banner */}
        <View style={styles.headerBanner} />

        {/* Header with Name and Contact Info */}
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.name}>Tamjid Ahmed</Text>
            <Text style={styles.title}>Student</Text>
          </View>
          
          <View style={styles.contactContainer}>
            <Text style={styles.contactItem}>
              <Link src="https://linkedin.com/in/name" style={styles.contactItem}>
                linkedin
              </Link>
            </Text>
            <Text style={styles.contactItem}>01813382223</Text>
            <Text style={styles.contactItem}>
              <Link src="mailto:tamjidahmed@gmail.com" style={styles.contactItem}>
                tamjidahmed@gmail.com
              </Link>
            </Text>
            <Text style={styles.portfolioLink}>
              <Link src="#" style={styles.portfolioLink}>
                Click here for my portfolio
              </Link>
            </Text>
          </View>
        </View>

        {/* Experience Section */}
        <View style={styles.experienceContainer}>
          <Text style={styles.sectionTitle}>Experience</Text>
          
          {/* First Job */}
          <View>
            <Text style={styles.jobTitle}>Art Director</Text>
            <Text style={styles.company}>
              Lotus Design Consultancy - a global design firm that specializes
              in digital content for various industries
            </Text>
            <Text style={styles.date}>
              March 2022 to August 2025 (3 years, 5 months)
            </Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>
                • Increased productivity by 70% year over year by leading a team
                of 20 senior and junior designers
              </Text>
              <Text style={styles.bulletItem}>
                • Maintained a client satisfaction rate of 100% after being in
                charge of overseeing multiple projects simultaneously
              </Text>
              <Text style={styles.bulletItem}>
                • Increased client partnerships to 50% year over year by
                consistently liaising with clients for creative requests
              </Text>
            </View>
          </View>

          {/* Second Job */}
          <View>
            <Text style={styles.jobTitle}>Senior Graphic Designer</Text>
            <Text style={styles.company}>Schuester Digital Media Group</Text>
            <Text style={styles.date}>
              November 2020 to January 2022 (1 year, 2 months)
            </Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>
                • Received a 100% rating from clients after working closely with
                the marketing team to produce editorial concepts for major
                magazines
              </Text>
              <Text style={styles.bulletItem}>
                • Boosted team efficiency by 90% by managing up to five projects
                at a time
              </Text>
              <Text style={styles.bulletItem}>
                • Designed more than 80% of the team's marketing campaigns for the
                year, which included graphics for online and offline layouts
              </Text>
              <Text style={styles.bulletItem}>
                • Mentored junior designers on projects
              </Text>
            </View>
          </View>
        </View>

        {/* Two Column Layout for Education and Skills */}
        <View style={styles.twoColumnContainer}>
          {/* Education Column */}
          <View style={styles.leftColumn}>
            <Text style={styles.sectionTitle}>Education</Text>
            <View style={{ marginLeft: 16 }}>
              <View>
                <Text style={styles.educationDegree}>
                  Master of Fine Arts in Digital Media
                </Text>
                <Text style={styles.educationInfo}>
                  The University of Roseton, 2020
                </Text>
                <View style={styles.bulletList}>
                  <Text style={styles.bulletItem}>• Best Creative Thesis</Text>
                  <Text style={styles.bulletItem}>• Awardee, Roseton Scholarship</Text>
                  <Text style={styles.bulletItem}>• Art Director, University of Roseton Magazine</Text>
                  <Text style={styles.bulletItem}>• Founding Member, Roseton Creative Circle</Text>
                </View>
              </View>

              <View style={{ marginTop: 16 }}>
                <Text style={styles.educationDegree}>
                  Bachelor of Arts in Graphic Design
                </Text>
                <Text style={styles.educationInfo}>
                  Croalstead State University, 2016
                </Text>
                <View style={styles.bulletList}>
                  <Text style={styles.bulletItem}>• Graduated Magna Cum Laude</Text>
                  <Text style={styles.bulletItem}>• Art Director, Croalstead U Magazine</Text>
                  <Text style={styles.bulletItem}>• President, University Art Club</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Skills Column */}
          <View style={styles.rightColumn}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsList}>
              <Text style={styles.skillItem}>• Print and Web Design</Text>
              <Text style={styles.skillItem}>• Illustration</Text>
              <Text style={styles.skillItem}>• Photography</Text>
              <Text style={styles.skillItem}>• Motion Graphics</Text>
              <Text style={styles.skillItem}>• Videography</Text>
              <Text style={styles.skillItem}>• Photo and Video Editing</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};