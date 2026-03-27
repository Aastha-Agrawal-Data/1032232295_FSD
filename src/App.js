import { useState } from "react";
import Form from "./components/Form";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    summary: "",
    education: "",
    skills: "",
    experience: "",
    certifications: "",
    customSections: [],
    styles: {
      global: {
        fontWeight: "normal",
        fontStyle: "normal",
        fontSize: "15px",
        fontFamily: "Inter"
      }
    }
  });

  return (
    <div className="container">
      <Form data={data} setData={setData} />
      <Resume data={data} setData={setData} />
    </div>
  );
}

export default App;