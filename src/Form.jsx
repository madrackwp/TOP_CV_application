import "./App.css";
import Personal from "./forms/Personal";
import Education from "./forms/Education";
import WorkExp from "./forms/WorkExp";
import { useState } from "react";

function Form({ formData, onSubmit }) {
  // const handleSubmit = (formData) => {
  //   // Use formData for form submission logic
  //   console.log("Form data submitted:", formData);
  // };
  let personalformData = formData.personal;
  let educationFormData = formData.education;
  let workExpFormData = formData.workExp;

  // console.log("I AM IN THE FORM!");
  // console.log(formData);

  return (
    <div className="app-form-main">
      <Personal onSubmit={onSubmit} formData={personalformData} />
      <Education onSubmit={onSubmit} formData={educationFormData} />
      <WorkExp onSubmit={onSubmit} formData={workExpFormData} />
    </div>
  );
}

export default Form;
