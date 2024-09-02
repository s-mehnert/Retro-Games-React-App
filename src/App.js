import './App.css';
import Header from './components/header';
import GameBox from './components/gameBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">    
        <Header />
      </header>
      <section className="Game-box">
        <div>
          <GameBox game="placeholder 1" />
          <h3>placeholder 2</h3>
        </div>
      </section>
    </div>
  );
}

export default App;
