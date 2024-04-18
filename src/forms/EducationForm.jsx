/* eslint-disable react/prop-types */
import binIcon from "../assets/bin.svg";

function EducationForm({ educationData, changeHandler, deleteHandler }) {
  return (
    <div className="app-form app-form-education">
      <button className="delete-btn" onClick={deleteHandler}>
        <img src={binIcon} alt="delete-btn" />
      </button>
      {/* School Name */}
      <div className="edu-school">
        <label htmlFor="school">School: </label>
        <input
          type="text"
          name="school"
          id="form-education-school"
          onChange={changeHandler}
          required
          value={educationData.school}
        />
      </div>
      {/* Qualification attained */}
      <div className="edu-qualification">
        <label htmlFor="qualification">Qualification: </label>
        <input
          type="text"
          name="qualification"
          id="form-education-qualification"
          onChange={changeHandler}
          required
          value={educationData.qualification}
        />
      </div>
      {/* Grade */}
      <div className="edu-grade">
        <label htmlFor="grade">Grade: </label>
        <input
          type="text"
          name="grade"
          id="form-education-grade"
          onChange={changeHandler}
          required
          value={educationData.grade}
        />
      </div>
      {/* Year of graduation */}
      <div className="edu-gradyear">
        <label htmlFor="graduationYear">Year of Graduation: </label>
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
    </div>
  );
}

export default EducationForm;
