import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
/* eslint-disable react/prop-types */

import "./form.css";
import EducationForm from "./EducationForm";
function Education({ formData, onSubmit }) {
  const [educationFormData, setEducationFormData] = useState(formData);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit("education", educationFormData); // Pass form data to parent for submission
  };

  function changeHandler(event, index) {
    let { name, value } = event.target;
    // Create a copy of the current educationFormData array
    let updatedFormData = [...educationFormData];
    // Update the specific education object within the array
    updatedFormData[index][name] = value;
    // Set the state with the updated array
    setEducationFormData(updatedFormData);
  }

  function newEntry(event) {
    event.preventDefault();
    // console.log(event);
    let updatedFormData = [...educationFormData];
    let newId = uuidv4();
    let newEntry = {
      id: newId,
      school: "",
      qualification: "",
      grade: "",
      graduationYear: "",
    };
    updatedFormData.push(newEntry);
    setEducationFormData(updatedFormData);
  }

  function deleteHandler(event, index) {
    console.log("Deleting Entry");
    console.log(event, index);
    let updatedFormData = [...educationFormData];
    updatedFormData.splice(index, 1);
    setEducationFormData(updatedFormData);
  }

  return (
    <form
      id="form-education"
      className="form-container"
      onSubmit={handleSubmit}
    >
      <h2>Education</h2>
      <button onClick={newEntry} className="new-entry"></button>
      {educationFormData.map((education, index) => (
        <>
          <EducationForm
            educationData={education}
            key={education.id}
            changeHandler={(event) => changeHandler(event, index)}
            deleteHandler={(event) => deleteHandler(event, index)}
          />
          {index < educationFormData.length - 1 && <hr />}
        </>
      ))}

      <button type="submit" className="update-btn">
        Add Info
      </button>
    </form>
  );
}

export default Education;
