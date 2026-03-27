import { useState } from "react";

function Form({ data, setData }) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!data.name) newErrors.name = "Name is required";

    if (!data.email) {
      newErrors.email = "Email is required";
    } else if (!data.email.includes("@")) {
      newErrors.email = "Invalid email";
    }

    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully");
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const addSection = () => {
    const sectionName = prompt("Enter Section Name");

    if (sectionName) {
      setData({
        ...data,
        customSections: [
          ...data.customSections,
          { title: sectionName, content: "" }
        ]
      });
    }
  };

  return (
    <div className="form-container">

      <input name="name" placeholder="Name" onChange={handleChange} />
      {errors.name && <p className="error">{errors.name}</p>}

      <input name="email" placeholder="Email" onChange={handleChange} />
      {errors.email && <p className="error">{errors.email}</p>}

      <textarea name="summary" placeholder="Professional Summary" onChange={handleChange}></textarea>
      <textarea name="education" placeholder="Education" onChange={handleChange}></textarea>
      <textarea name="experience" placeholder="Experience" onChange={handleChange}></textarea>
      <textarea name="skills" placeholder="Skills" onChange={handleChange}></textarea>
      <textarea name="certifications" placeholder="Certifications" onChange={handleChange}></textarea>

      {data.customSections.map((section, index) => (
        <textarea
          key={index}
          placeholder={section.title}
          onChange={(e) => {
            const updated = [...data.customSections];
            updated[index].content = e.target.value;
            setData({ ...data, customSections: updated });
          }}
        />
      ))}

      <button onClick={addSection}>+ Add Section</button>
      <button onClick={handleSubmit}>Submit</button>

    </div>
  );
}

export default Form;