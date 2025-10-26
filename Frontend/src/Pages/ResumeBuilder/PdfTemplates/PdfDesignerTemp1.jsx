import React from 'react';
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
    padding: 0,
  },
  maincontainer:{
display:"flex",
flexDirection:"column"

  },
  header: {
    display:"flex",
flexDirection:"column",
    backgroundColor: '#1F2937', 
    padding: 30,
    color: '#FFFFFF',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
    letterSpacing: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'light',
    marginBottom: 12,
  },
  contactInfo: {
    fontSize: 9,
    color: '#D1D5DB',
  },
  contentContainer: {
    display:"flex",
    flexDirection:'column',
paddingVertical: 30,  
    paddingHorizontal: 30,
borderWidth: 2,         
    borderColor: '#000000',  
    borderStyle: 'solid',
  },
  section: {
    marginBottom: 20,
  },
  sectionBox: {
    display:"flex",
    flexDirection:'column',
    backgroundColor: '#F3F4F6',
    padding: 16,
    borderRadius: 4,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 10,
    fontStyle: 'italic',
  },
  summaryText: {
    fontSize: 9,
    lineHeight: 1.6,
    color: '#374151',
    textAlign: 'justify',
  },
  skillsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skillColumn: {
    width: '30%',
  },
  skillItem: {
    fontSize: 9,
    color: '#374151',
    marginBottom: 6,
  },
  experienceItem: {
    marginBottom: 15,
    display:"flex",
    flexDirection:'column',
  },
  experienceHeader: {
    display:"flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
    fontWeight:"bold"
  },
  jobTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  dateRange: {
    fontSize: 8,
    fontWeight: 'semibold',
    color: '#4B5563',
  },
  bulletList: {
    marginLeft: 10, 
     display:"flex",
    flexDirection:'column',
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  bullet: {
    fontSize: 8,
    marginRight: 5,
    color: '#374151',
  },
  bulletText: {
    fontSize: 9,
    color: '#374151',
    lineHeight: 1.4,
    flex: 1,
  },
  educationItem: {
    marginBottom: 12,
  },
  degreeTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  institution: {
    fontSize: 9,
    color: '#374151',
    marginBottom: 4,
  },
  additionalItem: {
    fontSize: 9,
    color: '#374151',
    marginBottom: 6,
    lineHeight: 1.4,
  },
  label: {
    fontWeight: 'bold',
  },
});

export const PdfDesignerTemp1 = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
       
        <View style={styles.maincontainer}>
             {/* Header */}
 <View style={styles.header}>
          <Text style={styles.name}>DANIEL GALLEGO</Text>
          <Text style={styles.title}>UX DESIGNER</Text>
          <Text style={styles.contactInfo}>
            123 Anywhere St., Any City | hello@reallygreatsite.com | www.reallygreatsite.com
          </Text>
        </View>


           <View style={styles.contentContainer}>
          {/* Summary */}
          <View style={styles.section}>
            <View style={styles.sectionBox}>
              <Text style={styles.sectionTitle}>SUMMARY</Text>
              <Text style={styles.summaryText}>
                UX Designer with a focus on delivering impactful results, eager to tackle dynamic challenges and apply 
                creativity to craft intuitive user experiences. Demonstrated proficiency in project management, user-centric 
                problem-solving, and seamless collaboration across teams. Skilled in leveraging state-of-the-art tools and 
                methodologies to streamline processes and elevate user satisfaction
              </Text>
            </View>
          </View>

          {/* Technical Skills */}
          <View style={styles.section}>
            <View style={styles.sectionBox}>
              <Text style={styles.sectionTitle}>TECHNICAL SKILLS</Text>
              <View style={styles.skillsContainer}>
                <View style={styles.skillColumn}>
                  <Text style={styles.skillItem}>Prototyping Tools</Text>
                  <Text style={styles.skillItem}>User Research</Text>
                  <Text style={styles.skillItem}>Information Architecture</Text>
                </View>
                <View style={styles.skillColumn}>
                  <Text style={styles.skillItem}>Interaction Design</Text>
                  <Text style={styles.skillItem}>Visual Design</Text>
                  <Text style={styles.skillItem}>Usability Heuristics</Text>
                </View>
                <View style={styles.skillColumn}>
                  <Text style={styles.skillItem}>Accessibility</Text>
                  <Text style={styles.skillItem}>Responsive Design</Text>
                  <Text style={styles.skillItem}>User Testing Tools</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Professional Experience */}
          <View style={styles.section}>
            <View style={styles.sectionBox}>
              <Text style={styles.sectionTitle}>PROFESSIONAL EXPERIENCE</Text>
              {/* experieance-1 */}
              <View style={styles.experienceItem}>
                <View style={styles.experienceHeader}>
                  <Text style={styles.jobTitle}>Instant Chartz App, Morcelle Program</Text>
                  <Text style={styles.dateRange}>Jan 2023 - Present</Text>
                </View>
                <View style={styles.bulletList}>
                  <View style={styles.bulletItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.bulletText}>
                      Led development of an advanced automation system, achieving a 15% increase in operational efficiency.
                    </Text>
                  </View>
                  <View style={styles.bulletItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.bulletText}>
                      Streamlined manufacturing processes, reducing production costs by 10%.
                    </Text>
                  </View>
                  <View style={styles.bulletItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.bulletText}>
                      Implemented preventive maintenance strategies, resulting in a 20% decrease in equipment downtime.
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.experienceItem}>
                <View style={styles.experienceHeader}>
                  <Text style={styles.jobTitle}>System UX Engineer, XarrowAI Industries</Text>
                  <Text style={styles.dateRange}>Feb 2021 - Dec 2022</Text>
                </View>
                <View style={styles.bulletList}>
                  <View style={styles.bulletItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.bulletText}>
                      Designed and optimised a robotic control system, realizing a 12% performance improvement.
                    </Text>
                  </View>
                  <View style={styles.bulletItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.bulletText}>
                      Coordinated testing and validation, ensuring compliance with industry standards.
                    </Text>
                  </View>
                  <View style={styles.bulletItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.bulletText}>
                      Provided technical expertise, contributing to a 15% reduction in system failures.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Education */}
          <View style={styles.section}>
            <View style={styles.sectionBox}>
              <Text style={styles.sectionTitle}>EDUCATION</Text>
              
              <View style={styles.educationItem}>
                <View style={styles.experienceHeader}>
                  <Text style={styles.degreeTitle}>UX Industrial Basics and General Application</Text>
                  <Text style={styles.dateRange}>Aug 2016 - Oct 2019</Text>
                </View>
                <Text style={styles.institution}>University of Engineering UX Cohort</Text>
                <View style={styles.bulletList}>
                  <View style={styles.bulletItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.bulletText}>Major in Automotive Technology.</Text>
                  </View>
                  <View style={styles.bulletItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.bulletText}>
                      Thesis on "Technological Advancements within the current Mechatronics Industry".
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.educationItem}>
                <View style={styles.experienceHeader}>
                  <Text style={styles.degreeTitle}>Bachelor of Design in Process Engineering</Text>
                  <Text style={styles.dateRange}>May 2014 - May 2016</Text>
                </View>
                <Text style={styles.institution}>Engineering University</Text>
                <View style={styles.bulletList}>
                  <View style={styles.bulletItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.bulletText}>
                      Relevant coursework in Structural Design and Project Management.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View> 

          {/* Additional Information */}
          <View style={styles.section}>
            <View style={styles.sectionBox}>
              <Text style={styles.sectionTitle}>ADDITIONAL INFORMATION</Text>
              <Text style={styles.additionalItem}>
                <Text style={styles.label}>Languages: </Text>
                English, French, Mandarin.
              </Text>
              <Text style={styles.additionalItem}>
                <Text style={styles.label}>Certifications: </Text>
                Professional Design Engineer (PDE) License, Project Management Tech (PMT).
              </Text>
              <Text style={styles.additionalItem}>
                <Text style={styles.label}>Awards/Activities: </Text>
                Most Innovative Employer of the Year (2021), Overall Best Employee Division Two (2024), Onboarding Project Lead (2023)
              </Text>
            </View>
          </View> 
        </View>
        </View>
       

     
      </Page>
    </Document>
  );
};

export default PdfDesignerTemp1;