import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const toggleMode = () => {
    if (myStyle.color === "black") {
      setBtnText("Enable White Mode");
      setmyStyle({
        color: "white",
        backgroundColor: "black",
      });
    } else {
      setBtnText("Enable Dark Mode");
      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });
    }
  };

  return (
    <>
      <div style={myStyle}>
        <Navbar
          toggleMode={toggleMode}
          btnText={btnText}
          myStyle={myStyle}
          home="Home"
          about="About"
        />
        <TextForm />
      </div>
    </>
  );
}

export default App;
