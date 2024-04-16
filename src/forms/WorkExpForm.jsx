/* eslint-disable react/prop-types */
import binIcon from "../assets/bin.svg";

function WorkExpForm({ workExpData, changeHandler, deleteHandler }) {
  return (
    <div>
      <button className="delete-btn" onClick={deleteHandler}>
        <img src={binIcon} alt="delete-btn" />
      </button>
      {/* Company Name */}
      <label htmlFor="school">Company</label>
      <input
        type="text"
        name="company"
        id="form-work-company"
        onChange={changeHandler}
        required
        value={workExpData.company}
      />

      {/* Location  */}
      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="location"
        id="form-work-location"
        onChange={changeHandler}
        required
        value={workExpData.location}
      />

      {/* Role name */}
      <label htmlFor="role">Role</label>
      <input
        type="text"
        name="role"
        id="form-work-role"
        onChange={changeHandler}
        required
        value={workExpData.role}
      />

      {/* Start Date (MM/YYYY) */}
      <label htmlFor="startDate">Start Date</label>
      <input
        type="month"
        name="startDate"
        id="form-work-startDate"
        onChange={changeHandler}
        required
        value={workExpData.startDate}
      />

      {/* End Date (MM/YYYY) */}
      <label htmlFor="endDate">End Date</label>
      <input
        type="month"
        name="endDate"
        id="form-work-endDate"
        onChange={changeHandler}
        required
        value={workExpData.endDate}
      />

      {/* Description */}
      <label htmlFor="role">Description</label>
      <input
        type="textarea"
        name="description"
        id="form-work-description"
        onChange={changeHandler}
        value={workExpData.description}
      />
    </div>
  );
}

export default WorkExpForm;
