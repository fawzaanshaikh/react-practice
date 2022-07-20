import logo from './logo.svg';
import './App.css';

function App() {
  // JSX is returned and all of it has to be enclosed within one tag (could be div or an empty <>...</> tag)
  return (
    // Called as a JSX fragment for letting multiple elements be returned
    <> 
    <div className="blank">
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
    </div>
    </>
  );
}

export default App;
