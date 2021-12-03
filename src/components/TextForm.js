import React, { useState } from "react";

export default function TextForm() {
  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const handleMode = ()=>{

    if(myStyle.color === "black") {
      setBtnText("Enable White Mode");
      setmyStyle({
        color: "white",
        backgroundColor: "black",
    })
    }
    else {
        setBtnText("Enable Dark Mode");
        setmyStyle ({
          color: "black",
          backgroundColor: "white",
        });
    }

  }

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleDownClick = () => {
    setText(text.toLowerCase());
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const [text, setText] = useState("Enter text here...");

  return (
    <><div style={myStyle}>
      <div className="container p-3" >
        <div class="form-check form-switch d-flex justify-content-end">
          <input
            class="form-check-input me-2"
            type="checkbox"
            role="switch"
            onClick={handleMode}
            id="flexSwitchCheckDefault"
          />
          <label class="form-check-label" for="flexSwitchCheckDefault">
            {btnText}
          </label>
        </div>
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
              className="form-control"
              value={text}
              onChange={handleOnChange}
              col="3"
              rows="5"
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
          </div>
          <div className="col m-3">
            <h3>Text Details</h3>
            <p>
              Words = {text.split(" ").length} & Length = {text.length}.
            </p>
          </div>
        </div>
        <div className="container mx-3 border">
          <h3>Preview</h3>
          <p>{text}</p>
        </div>
      </div>
      </div>
    </>
  );
}
