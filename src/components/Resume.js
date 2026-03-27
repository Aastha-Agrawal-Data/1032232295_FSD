import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function Resume({ data, setData }) {

  const updateStyle = (key, value) => {
    setData({
      ...data,
      styles: {
        ...data.styles,
        global: {
          ...data.styles.global,
          [key]: value
        }
      }
    });
  };

  const toggleStyle = (key, activeValue, defaultValue) => {
    updateStyle(
      key,
      data.styles.global[key] === activeValue ? defaultValue : activeValue
    );
  };

  const downloadPDF = () => {
    const input = document.getElementById("resume");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="resume-container">

      {/* TOOLBAR */}
      <div className="toolbar">

        <div className="toolbar-left">
          <button onClick={() =>
            toggleStyle("fontWeight", "bold", "normal")
          }>B</button>

          <button onClick={() =>
            toggleStyle("fontStyle", "italic", "normal")
          }>I</button>
        </div>

        <div className="toolbar-right">
          <select onChange={(e) =>
            updateStyle("fontSize", e.target.value)
          }>
            <option value="14px">Compact</option>
            <option value="15px">Standard</option>
            <option value="16px">Readable</option>
            <option value="18px">Large</option>
          </select>

          <select onChange={(e) =>
            updateStyle("fontFamily", e.target.value)
          }>
            <option value="Inter">Modern</option>
            <option value="Georgia">Classic</option>
            <option value="Arial">Simple</option>
          </select>
        </div>

      </div>

      {/* RESUME */}
      <div id="resume" className="resume-box">

        <h1>{data.name || "Your Name"}</h1>
        <p>{data.email}</p>

        <div style={data.styles.global}>

          <h3>Professional Summary</h3>
          <p>{data.summary}</p>

          <h3>Education</h3>
          <p>{data.education}</p>

          <h3>Experience</h3>
          <p>{data.experience}</p>

          <h3>Skills</h3>
          <p>{data.skills}</p>

          <h3>Certifications</h3>
          <p>{data.certifications}</p>

          {data.customSections.map((section, index) => (
            <div key={index}>
              <h3>{section.title}</h3>
              <p>{section.content}</p>
            </div>
          ))}

        </div>
      </div>

      <button onClick={downloadPDF}>Download PDF</button>

    </div>
  );
}

export default Resume;