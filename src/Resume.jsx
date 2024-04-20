/* eslint-disable react/prop-types */

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

import { Font } from "@react-pdf/renderer";

Font.register({
  family: "Roboto",
  fonts: [
    { src: "./assets/Roboto/Roboto-Regular.ttf", fontWeight: 400 },
    { src: "./assets/Roboto/Roboto-Bold.ttf", fontWeight: "bold" },
    { src: "./assets/Roboto/Roboto-Italic.ttf", fontWeight: "italic" },
  ],
});

// Font.register({
//   family: "Roboto",
//   src: "/Users/wpgoh/Documents/TheOdinProject/TOP_CV_application/src/assets/Roboto/Roboto-Regular.ttf",
// });

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  page: {
    flexDirection: "column",
    // fontFamily: "Roboto",
  },
  section: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 0,
    padding: 10,
    // flexGrow: 1,
    borderBottom: 1,
    borderColor: "black",
  },
  sectionEntry: {
    marginTop: 10,
  },
  header: {
    fontSize: "24px",
    // fontStyle: "bold",
    marginTop: "0px",
    marginBottom: 10,
  },
  jobHeader: {
    // flex: true,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  // fontItalic: {
  // fontStyle: "italic",
  // },
  // fontBold: {
  // fontWeight: "bold",
  // },
  // fontBoldItalic: {
  //   fontStyle: "italic",
  //   fontWeight: "bold",
  // },
});

function Resume({ formData }) {
  // Create Document Component

  let personal = formData.personal;
  let education = formData.education;
  let workExp = formData.workExp;
  // console.log(RobotoBold);
  // console.log(personal.name);
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={{ fontSize: "32px", fontStyle: "bold" }}>
            {personal.name}
          </Text>
          <View style={{}}>
            <Text>
              <Text style={{ fontStyle: "italic" }}>Contact Number: </Text>
              {personal.number}
            </Text>
            <Text>
              <Text style={{ fontStyle: "italic" }}>Email: </Text>
              {personal.email}
            </Text>
          </View>
        </View>
        <hr />

        {/* Education info */}
        <View style={styles.section}>
          <Text style={styles.header}>Education:</Text>
          {education.map((edu) => (
            <View style={styles.sectionEntry} key={edu.id}>
              <View style={styles.jobHeader}>
                <Text style={styles.fontBold}>{edu.school}</Text>
                <Text>{edu.graduationYear}</Text>
              </View>
              <View>
                <Text>{edu.qualification}</Text>
                <Text>{edu.grade}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Work Exp info */}
        <View style={styles.section}>
          <Text style={styles.header}>Work Experience:</Text>
          {workExp.map((exp) => (
            <View style={styles.sectionEntry} key={exp.id}>
              <View style={styles.jobHeader}>
                <Text style={styles.fontBold}>{exp.company}</Text>
                <Text>
                  {exp.startDate} to {exp.endDate}
                </Text>
              </View>
              <Text style={styles.fontBoldItalic}>{exp.role}</Text>
              <View>
                <Text>{exp.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
  // console.log("I AM IN THE RESUME!");
  // console.log(formData);
  return (
    <div className="app-resume">
      <PDFViewer style={{ width: "100%", height: "100vh" }}>
        <MyDocument />
      </PDFViewer>
    </div>
  );
}

export default Resume;
