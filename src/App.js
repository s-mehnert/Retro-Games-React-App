import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import GameBox from './components/gameBox';

function App() {

  const [selectedGame, setSelectedGame] = useState("Select Game To Play");
  const onSelectGameHandler = newGame => {
    setSelectedGame(newGame);
  };
  
  return (
    <div className="App">
      <header className="App-header">    
        <Header handler={onSelectGameHandler} />
      </header>
      <section className="Game-box">
        <GameBox game={selectedGame} />      
      </section>
    </div>
  );
}

export default App;
