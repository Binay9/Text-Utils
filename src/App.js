import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar home="Home" about="About" />
      <TextForm />
    </>
  );
}

export default App;
