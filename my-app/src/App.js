// import logo from './logo.svg';
import './App.css';

let name = "Fawzaan"; // This is a variable which can then be used in the JSX code using {}

function App() {
  // JSX is returned and all of it has to be enclosed within one tag (could be div or an empty <>...</> tag)
  return (
    // Called as a JSX fragment for letting multiple elements be returned
    <> 
    {/* <div className="blank">
      <h1>This is practice</h1>
    </div>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Fawzaan
        </a>
      </header>
    </div> */}

    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>

    <h1>Hello {name}</h1>
    <div className="container">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti temporibus in perspiciatis sequi maiores, ratione fugiat, labore reprehenderit autem aspernatur nisi dolorem ipsa quidem laudantium sed sunt modi ab, ullam esse libero. Magni, corrupti.
    </div>
    </>
  );
}

export default App;
