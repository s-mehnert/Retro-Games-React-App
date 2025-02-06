import React, { useState } from 'react';
import './App.css';
import {games} from './components/gameData';
import Header from './components/header';
import GameBox from './components/gameBox';

function App() {

  const [selectedGame, setSelectedGame] = useState("Select Game To Play");
  const onSelectGameHandler = newGame => {
    setSelectedGame(newGame);
    console.log(selectedGame);
    console.log(games[selectedGame]);
  };

  let figures = [];
  for (const game in games) {
    figures.push({id: game, src: games[game].src, name: games[game].name, alt: games[game].alt, href: games[game].href});
  }
  
  return (
    <>
      <h1>RETRO GAMES</h1>
      <div className="App">
        <header className="App-header">    
          <Header handler={onSelectGameHandler} data={figures} />
        </header>
        <section className="Game-box">
          {games[selectedGame] ? <GameBox game={games[selectedGame].alt} src={games[selectedGame].href} /> : <h2>Select Game To Play</h2>}
        </section>
      </div>
    </>
  );
}

export default App;
