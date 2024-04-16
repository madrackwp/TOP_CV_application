import { useState } from "react";

function EducationForm({ educationData, changeHandler }) {
  const [educationFormData, setEducationFormData] = useState(educationData);

  function dataChangeHandler(event) {
    console.log(event);
    const { name, value } = event.target;
    setEducationFormData(
      { ...educationFormData },
      (educationFormData[name] = value)
    );

    changeHandler(educationFormData);
  }

  return (
    <form id="form-education" className="app-form">
      {/* School Name */}
      <label htmlFor="school">School</label>
      <input
        type="text"
        name="school"
        id="form-education-school"
        onChange={changeHandler}
        required
        value={educationFormData.school}
      />

      {/* Qualification attained */}
      <label htmlFor="qualification">Qualification</label>
      <input
        type="text"
        name="qualification"
        id="form-education-qualification"
        onChange={dataChangeHandler}
        required
        value={educationFormData.qualification}
      />

      {/* Grade */}
      <label htmlFor="grade">Grade</label>
      <input
        type="text"
        name="grade"
        id="form-education-grade"
        onChange={dataChangeHandler}
        required
        value={educationFormData.grade}
      />

      {/* Year of graduation */}
      <label htmlFor="graduationYear">Year of Graduation</label>
      <input
        type="number"
        name="graduationYear"
        id="form-education-graduationYear"
        onChange={dataChangeHandler}
        required
        max={2999}
        min={1900}
        value={educationFormData.graduationDate}
      />
    </form>
  );
}

export default EducationForm;
