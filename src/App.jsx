import { useState } from "react";

import Form from "./Form";
import Resume from "./Resume";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    personal: {
      name: "Thomas Chang",
      number: "93939393",
      email: "t.chang@abc.com",
    },
    education: [
      {
        id: 123,
        school: "ABC University",
        qualification: "Bachelors of Enginger",
        grade: "First Class Honours",
        graduationYear: "2024",
      },
    ],
    workExp: [
      {
        id: 132,
        company: "XYZ Bank",
        location: "Singapore",
        role: "Software Enginger",
        startDate: "2019-01",
        endDate: "2023-12",
        description: "I helped many things",
      },
    ],
  });

  function handleFormDataChange(type, newForm) {
    let form = { ...formData };
    if (type == "personal") {
      form.personal = newForm;
    } else if (type == "education") {
      form.education = newForm;
    } else {
      form.workExp = newForm;
    }
    // console.log(form);
    setFormData(form);
  }

  return (
    <div className="app-home">
      <Form formData={formData} onSubmit={handleFormDataChange} />
      <Resume formData={formData} />
    </div>
  );
}

export default App;
