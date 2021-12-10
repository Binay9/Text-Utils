import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import CopyRight from "./components/CopyRight";

function App() {
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const toggleMode = () => {
    if (myStyle.color === "black") {
      setBtnText("Enable Light Mode");
      setmyStyle({
        color: "white",
        backgroundColor: "black",
      });
      ShowAlert("Dark mode has been enabled", "success");
    } else {
      setBtnText("Enable Dark Mode");
      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });
      ShowAlert("Light mode has been enabled", "success");
    }
  };

  const ShowAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => setAlert(null), 2500);
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
        <Alert alert={alert} />
        <TextForm ShowAlert={ShowAlert} />
        <CopyRight />
      </div>
    </>
  );
}

export default App;
