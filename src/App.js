import './App.css';
import Header from './components/header';
import GameBox from './components/gameBox';
import { selectedGame } from './components/gameIcon';

function App() {
  return (
    <div className="App">
      <header className="App-header">    
        <Header />
      </header>
      <section className="Game-box">
        <div>
          <GameBox game={selectedGame} />
          <h3>{selectedGame}</h3>
        </div>
      </section>
    </div>
  );
}

export default App;
