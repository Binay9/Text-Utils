import React, { useState } from "react";

export default function TextForm() {
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here...");

  return (
    <div>
      <div className="mb-3">
        <label className="form-label">
          <h3>Enter your text below</h3>
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          rows="5"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
