import React, { useState } from 'react';
import './App.css';
import {games} from './components/gameData';
import Header from './components/header';
import GameBox from './components/gameBox';

function App() {

  const [selectedGame, setSelectedGame] = useState("Select Game To Play");
  const onSelectGameHandler = newGame => {
    setSelectedGame(newGame);
  };

  let figures = [];
  for (const game in games) {
    figures.push({id: game, src: games[game].src, alt: games[game].alt, href: games[game].href});
  }
  
  return (
    <div className="App">
      <header className="App-header">    
        <Header handler={onSelectGameHandler} data={figures} />
      </header>
      <section className="Game-box">
        <GameBox game={selectedGame} src={games[selectedGame] ? games[selectedGame].href : ""} />      
      </section>
    </div>
  );
}

export default App;
