import React from 'react';
import {games} from './gameData';

function main() {
  
  // function handleClick() {
  //   alert('Successfully clicked --- placeholder text');
  // }
  // need to include the following attribute in img: onClick={handleClick}

  let figures = [];
  for (const game in games) {
    figures.push({id: game, src: games[game].src, alt: games[game].alt, href: games[game].href});
  }

  figures = figures.map(game => (
    <figure>
      <a href={game.href} target="_blank">
        <img src={game.src} alt={game.alt} title={game.alt} />
      </a>
      <figcaption>{game.alt}</figcaption>   
    </figure>
  ));

  return (
    <div>
      <h1>RETRO GAMES</h1>
      <p>Pick a game and play.</p>
      <div class="games">
        {figures}
      </div>
    </div>
  );
}

export default main;