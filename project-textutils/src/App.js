import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* Added a navbar as a component which we made in Navbar.js, and we passed a prop named TextUtils to the component which is displayed on the screen */}
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" />
      </div>
      <About/>
    </>
  );
}

export default App;
