/* eslint-disable react/prop-types */
import binIcon from "../assets/bin.svg";

function WorkExpForm({ workExpData, changeHandler, deleteHandler }) {
  return (
    <div className="app-form app-form-workexp">
      <button className="delete-btn" onClick={deleteHandler}>
        <img src={binIcon} alt="delete-btn" />
      </button>

      {/* Company Name */}
      <div className="workexp-company">
        <label htmlFor="school">Company: </label>
        <input
          type="text"
          name="company"
          id="form-work-company"
          onChange={changeHandler}
          required
          value={workExpData.company}
        />
      </div>

      {/* Location  */}
      <div className="workexp-location">
        <label htmlFor="location">Location: </label>
        <input
          type="text"
          name="location"
          id="form-work-location"
          onChange={changeHandler}
          required
          value={workExpData.location}
        />
      </div>

      {/* Role name */}
      <div className="workexp-role">
        <label htmlFor="role">Role: </label>
        <input
          type="text"
          name="role"
          id="form-work-role"
          onChange={changeHandler}
          required
          value={workExpData.role}
        />
      </div>

      {/* Start Date (MM/YYYY) */}
      <div className="workexp-startdate">
        <label htmlFor="startDate">Start Date: </label>
        <input
          type="month"
          name="startDate"
          id="form-work-startDate"
          onChange={changeHandler}
          required
          value={workExpData.startDate}
        />
      </div>

      {/* End Date (MM/YYYY) */}
      <div className="workexp-enddate">
        <label htmlFor="endDate">End Date: </label>
        <input
          type="month"
          name="endDate"
          id="form-work-endDate"
          onChange={changeHandler}
          required
          value={workExpData.endDate}
        />
      </div>

      {/* Description */}
      <div className="workexp-description">
        <label htmlFor="role">Description: </label>
        <textarea
          name="description"
          id="form-work-description"
          onChange={changeHandler}
          value={workExpData.description}
        />
      </div>
    </div>
  );
}

export default WorkExpForm;
