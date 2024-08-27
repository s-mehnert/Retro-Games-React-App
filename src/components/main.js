import React from 'react';
import memory from '../images/memory.JPG';
import mole from '../images/mole.png';
import connectFour from '../images/connectFour.JPG';
import spaceInvaders from '../images/spaceInvaders.JPG';
import snake from '../images/snake.JPG';
import frog from '../images/frog.png';
import tetris from '../images/tetris.JPG';

const thumbnails = {  
  memory : {
    href : "https://s-mehnert.github.io/memory_game/",
    src : memory,
    alt : "Memory"
  },
  whackTheMole : {
    href : "https://s-mehnert.github.io/whackTheMole_game/",
    src : mole,
    alt : "Whack The Mole"
  },
  connectFour : {
    href : "https://s-mehnert.github.io/connectFour_game/",
    src : connectFour,
    alt : 'Connect Four'
  },
  spaceInvaders : {
    href : "https://s-mehnert.github.io/spaceInvaders_game/",
    src : spaceInvaders,
    alt : "Space Invaders"
  },
  snake : {
    href : "https://s-mehnert.github.io/snake_game/",
    src : snake,
    alt : "Snake"
  },
  frogger : {
    href : "https://s-mehnert.github.io/frogger_game/",
    src : frog,
    alt : 'Frogger'
  },
  tetris : {
    href : "https://s-mehnert.github.io/tetris_game/",
    src : tetris,
    alt : "Tetris"
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