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
        <GameBox game="Snake" />
      </section>
    </div>
  );
}

export default App;
