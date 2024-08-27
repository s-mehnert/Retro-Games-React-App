import logo from './logo.svg';
import './App.css';
import testComponent from './components/testComponent';
import main from './components/main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {main()}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Attribution
        </a>
      </header>
      <body>
        
      </body>
    </div>
  );
}

export default App;
