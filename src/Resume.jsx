/* eslint-disable react/prop-types */
// import { useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";

// const fontSrc = "https://fonts.googleapis.com/css2?family=Roboto&display=swap";

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "src/assets/Roboto/Roboto-Regular.ttf",
    }, // font-style: normal, font-weight: normal
    { src: "src/assets/Roboto/Roboto-Bold.ttf", fontStyle: "bold" },
    { src: "src/assets/Roboto/Roboto-Italic.ttf", fontStyle: "italic" },
  ],
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  page: {
    flexDirection: "column",
    fontFamily: "Roboto",
    // color: "pink",
    fontStyle: "normal",
    fontWeight: "normal",
    // backgroundColor: "#E4E4E4",
    // width: 100%
  },
  section: {
    margin: 10,
    padding: 10,
    // flexGrow: 1,
  },
  header: {
    fontSize: "20px",
    fontStyle: "bold",
  },
});

function Resume({ formData }) {
  // Create Document Component

  let personal = formData.personal;
  let education = formData.education;
  let workExp = formData.workExp;

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

        {/* Education info */}
        <View style={styles.section}>
          <Text style={styles.header}>Education:</Text>
          {education.map((edu) => (
            <View key={edu.id}>
              <View>
                <Text>{edu.school}</Text>
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
            <View key={exp.id}>
              <View>
                <Text>{exp.company}</Text>
                <Text>
                  {exp.startDate} - {exp.endDate}
                </Text>
              </View>
              <Text>{exp.role}</Text>
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
