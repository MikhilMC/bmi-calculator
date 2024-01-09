import { useState } from "react";
import Form from "./Form";
import Result from "./Result";

export default function App() {
  const [formData, setFormData] = useState(null);

  function handleFormDataSubmit(data) {
    setFormData(data);
  }

  return (
    <div className="app">
      <Form onFormDataSubmit={handleFormDataSubmit} />
      {formData && <Result formData={formData} />}
    </div>
  );
}
