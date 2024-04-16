import { useState } from "react";
import "./form.css";
function Personal({ onSubmit, formData }) {
  const [personalformData, setPersonalFormData] = useState(formData);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit("personal", personalformData); // Pass form data to parent for submission
  };

  function formChangeHandler(event) {
    const { name, value } = event.target; // Destructure name and value from event
    setPersonalFormData({ ...personalformData, [name]: value }); // Update form data with new value
  }

  return (
    <form id="form-personal" className="app-form" onSubmit={handleSubmit}>
      <label htmlFor="personal-name">Name:</label>
      <input
        type="text"
        id="personal-name"
        onChange={formChangeHandler}
        value={personalformData.name}
        required
        name="name"
      />

      <label htmlFor="personal-number">Contact Number</label>
      <input
        type="number"
        id="personal-number"
        value={personalformData.number}
        onChange={formChangeHandler}
        required
        name="number"
      />

      <label htmlFor="personal-email">Email</label>
      <input
        type="email"
        id="personal-email"
        value={personalformData.email}
        onChange={formChangeHandler}
        required
        name="email"
      />

      <button type="submit">Add Info</button>
    </form>
  );
}

export default Personal;
