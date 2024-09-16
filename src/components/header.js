import React from 'react';
import GameIcon from './gameIcon';

function Header(props) {
  return (
    <div>
      <h1>RETRO GAMES</h1>
      <p>Pick a game and play.</p>
      <div class="games">
        {props.data.map(game => <GameIcon href={game.href} src={game.src} alt={game.alt} key={game.id} handler={props.handler} />)}
      </div>
    </div>
  );
}

export default Header;