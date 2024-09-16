import React from 'react';
import {games} from './gameData';
import GameIcon from './gameIcon';

function Header(props) {

  let figures = [];
  for (const game in games) {
    figures.push({id: game, src: games[game].src, alt: games[game].alt, href: games[game].href});
  }

  return (
    <div>
      <h1>RETRO GAMES</h1>
      <p>Pick a game and play.</p>
      <div class="games">
        {figures.map(game => <GameIcon href={game.href} src={game.src} alt={game.alt} key={game.id} handler={props.handler} />)}
      </div>
    </div>
  );
}

export default Header;