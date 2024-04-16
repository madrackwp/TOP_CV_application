import { useState } from "react";
import "./form.css";
function WorkExp({ formData, onSubmit }) {
  const [workExpFormData, setWorkExpFormData] = useState(formData);

  // console.log(startDateElm);
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target.startDate.value, event.target.endDate.value);
    onSubmit("workExp", workExpFormData); // Pass form data to parent for submission
  };

  function formChangeHandler(event) {
    const { name, value } = event.target; // Destructure name and value from event
    // Check if start date is before end date
    if (name === "startDate" && value > workExpFormData.endDate) {
      alert("Start Date must be before End Date!");
    } else if (name === "endDate" && value < workExpFormData.startDate) {
      alert("End Date must be after Start Date!");
    } else {
      setWorkExpFormData({ ...workExpFormData, [name]: value });
    }
  }

  return (
    <form id="form-education" className="app-form" onSubmit={handleSubmit}>
      {/* Company Name */}
      <label htmlFor="school">Company</label>
      <input
        type="text"
        name="company"
        id="form-work-company"
        onChange={formChangeHandler}
        required
        value={workExpFormData.company}
      />

      {/* Location  */}
      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="location"
        id="form-work-location"
        onChange={formChangeHandler}
        required
        value={workExpFormData.location}
      />

      {/* Role name */}
      <label htmlFor="role">Role</label>
      <input
        type="text"
        name="role"
        id="form-work-role"
        onChange={formChangeHandler}
        required
        value={workExpFormData.role}
      />

      {/* Start Date (MM/YYYY) */}
      <label htmlFor="startDate">Start Date</label>
      <input
        type="month"
        name="startDate"
        id="form-work-startDate"
        onChange={formChangeHandler}
        required
        value={workExpFormData.startDate}
      />

      {/* End Date (MM/YYYY) */}
      <label htmlFor="endDate">End Date</label>
      <input
        type="month"
        name="endDate"
        id="form-work-endDate"
        onChange={formChangeHandler}
        required
        value={workExpFormData.endDate}
      />

      {/* Description */}
      <label htmlFor="role">Description</label>
      <input
        type="textarea"
        name="description"
        id="form-work-description"
        onChange={formChangeHandler}
        value={workExpFormData.description}
      />

      <button type="submit">Add Info</button>
    </form>
  );
}

export default WorkExp;
