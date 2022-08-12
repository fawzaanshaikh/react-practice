import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'; 

function App() {
  const [mode, setMode] = useState("light");  // Whether dark mode is enabled 

  return (
    <>
      {/* Added a navbar as a component which we made in Navbar.js, and we passed a prop named TextUtils to the component which is displayed on the screen */}
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" />
      </div>
      <About/>
    </>
  );
}

export default App;
