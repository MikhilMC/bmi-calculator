import { useState } from "react";

export default function Form({ onFormDataSubmit }) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      height,
      weight,
    };

    onFormDataSubmit(formData);
  }

  return (
    <div className="form-box">
      <form onSubmit={handleSubmit}>
        <div className="form-data-box">
          <label>Height (Meters): </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </div>
        <div className="form-data-box">
          <label>Weight (Kilo Grams): </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}
