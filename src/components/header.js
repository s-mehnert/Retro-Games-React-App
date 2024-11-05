import React from 'react';
import GameIcon from './gameIcon';

function Header(props) {
  return (
    <div>
      <div className="games">
        {props.data.map(game => <GameIcon name={game.name} href={game.href} src={game.src} alt={game.alt} key={game.id} handler={props.handler} />)}
      </div>
    </div>
  );
}

export default Header;