import logo from './logo.svg';
import './App.css';

function App() {
  const shortenWidth = {
    width: "wrap-content"
  };

  const greyBackground = {
    color: "grey"
  };
  
  return (
    <>
      <div className="container text-center">
        <div className="container-within row text-center my-5 white-bg">
          <div className="col text-center my-5">Module 1</div>
        </div>
        <div className="container-within row text-center my-5 white-bg">
          <div className="col text-center my-5">Module 2</div>
        </div>
        <div className="container-within row text-center my-5 white-bg">
          <div className="col text-center my-5">Module 3</div>
        </div>
        <div className="container-within row text-center my-5 white-bg">
          <div className="col text-center my-5">Module 4</div>
        </div>
      </div>
    </>
  );
}

export default App;
