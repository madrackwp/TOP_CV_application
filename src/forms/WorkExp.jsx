/* eslint-disable react/prop-types */
import { useState } from "react";
import "./form.css";
import WorkExpForm from "./WorkExpForm";
import { v4 as uuidv4 } from "uuid";
function WorkExp({ formData, onSubmit }) {
  const [workExpFormData, setWorkExpFormData] = useState(formData);

  // console.log(startDateElm);
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target.startDate.value, event.target.endDate.value);
    onSubmit("workExp", workExpFormData); // Pass form data to parent for submission
  };

  function formChangeHandler(event, index) {
    const { name, value } = event.target; // Destructure name and value from event
    // Check if start date is before end date
    if (name === "startDate" && value > workExpFormData.endDate) {
      alert("Start Date must be before End Date!");
    } else if (name === "endDate" && value < workExpFormData.startDate) {
      alert("End Date must be after Start Date!");
    } else {
      let oldData = [...workExpFormData];
      oldData[index][name] = value;

      setWorkExpFormData(oldData);
    }
  }

  function deleteHandler(event, index) {
    console.log(event);
    console.log(index);

    let oldData = [...workExpFormData];
    oldData.splice(index, 1);
    setWorkExpFormData(oldData);
  }

  function addEntry(event) {
    event.preventDefault();
    console.log("ADDING NEW WORK EXP");
    let newID = uuidv4();
    let newEntry = {
      id: newID,
      company: "",
      location: "",
      role: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    let oldData = [...workExpFormData];
    oldData.push(newEntry);
    setWorkExpFormData(oldData);
  }

  return (
    <form id="form-workExp" className="app-form" onSubmit={handleSubmit}>
      <h2>Work Experience</h2>
      <button onClick={addEntry} className="new-entry"></button>
      {workExpFormData.map((workExp, index) => (
        <WorkExpForm
          key={workExp.id}
          workExpData={workExp}
          changeHandler={(event) => formChangeHandler(event, index)}
          deleteHandler={(event) => deleteHandler(event, index)}
        />
      ))}
      <button type="submit">Add Info</button>
    </form>
  );
}

export default WorkExp;
