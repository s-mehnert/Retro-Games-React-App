import React from 'react';
import frog from '../images/frog.png';
import connectFour from '../images/connectFour.JPG';

const thumbnails = {
  frogger : {
    href : "https://s-mehnert.github.io/frogger_game/",
    src : frog,
    alt : 'Frogger'
  },
  connectFour : {
    href : "https://s-mehnert.github.io/connectFour_game/",
    src : connectFour,
    alt : 'Connect Four'
  }
};

function main() {
  
  // function handleClick() {
  //   alert('Successfully clicked --- placeholder text');
  // }
  // need to include the following attribute in img: onClick={handleClick}

  let figures = [];
  for (const game in thumbnails) {
    figures.push({id: game, src: thumbnails[game].src, alt: thumbnails[game].alt, href: thumbnails[game].href});
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