import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import GameBox from './components/gameBox';

function App() {

  const [selectedGame, setSelectedGame] = useState("Select Game To Play");
  const onSelectGameHandler = (newGame) => {
    setSelectedGame(newGame);
  };
  
  return (
    <div className="App">
      <header className="App-header">    
        <Header />
      </header>
      <section className="Game-box">
        <div>
          <GameBox game={selectedGame ? selectedGame : "placeholder 1"} />
          <h3>Placeholder for iframe</h3>
        </div>
      </section>
    </div>
  );
}

export default App;
