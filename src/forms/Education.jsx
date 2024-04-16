import { useState } from "react";
import "./form.css";
function Education({ formData, onSubmit }) {
  const [educationFormData, seteducationFormData] = useState(formData);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit("education", educationFormData); // Pass form data to parent for submission
  };

  function formChangeHandler(event) {
    const { name, value } = event.target; // Destructure name and value from event
    seteducationFormData({ ...educationFormData, [name]: value }); // Update form data with new value
  }

  return (
    <form id="form-education" className="app-form" onSubmit={handleSubmit}>
      {/* School Name */}
      <label htmlFor="school">School</label>
      <input
        type="text"
        name="school"
        id="form-education-school"
        onChange={formChangeHandler}
        required
        value={educationFormData.school}
      />

      {/* Qualification attained */}
      <label htmlFor="qualification">Qualification</label>
      <input
        type="text"
        name="qualification"
        id="form-education-qualification"
        onChange={formChangeHandler}
        required
        value={educationFormData.qualification}
      />

      {/* Grade */}
      <label htmlFor="grade">Grade</label>
      <input
        type="text"
        name="grade"
        id="form-education-grade"
        onChange={formChangeHandler}
        required
        value={educationFormData.grade}
      />

      {/* Year of graduation */}
      <label htmlFor="graduationYear">Year of Graduation</label>
      <input
        type="number"
        name="graduationYear"
        id="form-education-graduationYear"
        onChange={formChangeHandler}
        required
        max={2999}
        min={1900}
        value={educationFormData.graduationYear}
      />

      <button type="submit">Add Info</button>
    </form>
  );
}

export default Education;
