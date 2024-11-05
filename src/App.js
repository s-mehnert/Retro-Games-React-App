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
    <div className="App">
      <header className="App-header">    
        <Header handler={onSelectGameHandler} data={figures} />
      </header>
      <section className="Game-box">
        {games[selectedGame] ? <GameBox game={games[selectedGame].alt} src={games[selectedGame].href} /> : <h2>Select Game To Play</h2>}
        {/* <GameBox game={games[selectedGame].alt} src={games[selectedGame] ? games[selectedGame].href : "https://s-mehnert.github.io/memory_game/"} /> */}
      </section>
    </div>
  );
}

export default App;
