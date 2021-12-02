import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
        {/* <Navbar home="Home props" about="About props"  />
         */}
         <Navbar home="Home" about="About"/>
         <br />
         <div className="container">
          <TextForm/>
         </div>

     </>
  );
}

export default App;
