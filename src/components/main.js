import React from 'react';
import frog from '../images/frog.png';
import connectFour from '../images/connectFour.JPG';

const thumbnails = {
    frogger : {
        src : frog,
        alt : 'Frogger'
    },
    connectFour : {
        src : connectFour,
        alt : 'Connect Four'
    }
};

function main() {
    
  let figures = [];
  for (const game in thumbnails) {
    figures.push({id: game, src: thumbnails[game].src, alt: thumbnails[game].alt})
  }

  figures = figures.map(game => (
    <figure>
        <img src={game.src} alt={game.alt} title={game.alt} />
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