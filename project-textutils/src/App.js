import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'; 

function App() {
  const [mode, setMode] = useState("light");  // Whether dark mode is enabled 

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      {/* Added a navbar as a component which we made in Navbar.js, and we passed a prop named TextUtils to the component which is displayed on the screen */}
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" />
      </div>
      <About/>
    </>
  );
}

export default App;
