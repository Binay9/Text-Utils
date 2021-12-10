import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());

    props.ShowAlert("Text has been converted to uppercase.", "success");
  };

  const handleDownClick = () => {
    setText(text.toLowerCase());
    props.ShowAlert("Text has been converted to lowercase.", "success");
  };

  const handleCopyClick = () => {
    let copyText = document.getElementById("textString");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.ShowAlert("Text has been copied to clipboard.", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.ShowAlert("Text Cleared.", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here...");

  return (
    <>
      <div style={{ height: "120vh" }}>
        <div className="container p-3">
          <div className="row p-4 m-3 border">
            <div className="col">
              <div className="d-flex justify-content-between">
                <div>
                  <label className="form-label">
                    <h3>Enter your text below</h3>
                  </label>
                </div>
                <div className="pt-2">
                  <button
                    className="btn btn-sm btn-warning"
                    onClick={handleClearClick}
                  >
                    Clear Text
                  </button>
                </div>
              </div>
              <textarea
                className="form-control text-break"
                value={text}
                onChange={handleOnChange}
                col="3"
                rows="5"
                id="textString"
              ></textarea>
              <button
                className="btn btn-sm btn-primary my-2"
                onClick={handleUpClick}
              >
                Convert to Uppercase
              </button>
              <button
                className="btn btn-sm btn-primary m-2"
                onClick={handleDownClick}
              >
                Convert to Lowercase
              </button>
              <button
                className="btn btn-sm btn-primary"
                onClick={handleCopyClick}
              >
                Copy Text
              </button>
            </div>
            <div className="col m-3">
              <h3>Text Details</h3>
              <p>
                Words = {text.split(" ").length} & Length = {text.length}.
              </p>
            </div>
          </div>
          <div className="text-center border">
            <h3>Preview</h3>
            <p className="text-break">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
