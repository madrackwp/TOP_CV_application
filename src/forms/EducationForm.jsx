/* eslint-disable react/prop-types */
import binIcon from "../assets/bin.svg";

function EducationForm({ educationData, changeHandler, deleteHandler }) {
  return (
    <div id="form-education" className="app-form">
      <button className="delete-btn" onClick={deleteHandler}>
        <img src={binIcon} alt="delete-btn" />
      </button>
      {/* School Name */}
      <label htmlFor="school">School</label>
      <input
        type="text"
        name="school"
        id="form-education-school"
        onChange={changeHandler}
        required
        value={educationData.school}
      />
      {/* Qualification attained */}
      <label htmlFor="qualification">Qualification</label>
      <input
        type="text"
        name="qualification"
        id="form-education-qualification"
        onChange={changeHandler}
        required
        value={educationData.qualification}
      />
      {/* Grade */}
      <label htmlFor="grade">Grade</label>
      <input
        type="text"
        name="grade"
        id="form-education-grade"
        onChange={changeHandler}
        required
        value={educationData.grade}
      />
      {/* Year of graduation */}
      <label htmlFor="graduationYear">Year of Graduation</label>
      <input
        type="number"
        name="graduationYear"
        id="form-education-graduationYear"
        onChange={changeHandler}
        required
        max={2999}
        min={1900}
        value={educationData.graduationYear}
      />
    </div>
  );
}

export default EducationForm;
