import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      {/* Added a navbar as a component which we made in Navbar.js, and we passed a prop named TextUtils to the component which is displayed on the screen */}
      <Navbar title="TextUtils" aboutText="About TextUtils" />
    </>
  );
}

export default App;
