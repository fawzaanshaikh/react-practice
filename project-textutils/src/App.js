import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'; 
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes, // Used to be Switch earlier
  Route
  // Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");  // Whether dark mode is enabled
  const [alert, setAlert] = useState(null);   // Alert for actions happening on the website

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      {/* Added a navbar as a component which we made in Navbar.js, and we passed a prop named TextUtils to the component which is displayed on the screen */}
      <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
              <Route exact path="/about" element={<About />}> {/* exact is written so as to let react know that it has to do exact matching of the URLs, not partial */}
                {/* <About /> */}
              </Route>
              <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />}>
              </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
