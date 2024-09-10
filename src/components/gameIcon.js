import React from "react";

function GameIcon(props) {
    
  const handleClick = event => {
    const newGame = event.target.title;
    props.setSelectedGame(newGame);
  };

    return (
      <div>
        <figure>
            <a href="#.Game-box" onClick={handleClick}>
                <img src={props.src} alt={props.alt} title={props.alt} />
            </a>
            <figcaption>{props.alt}</figcaption>
        </figure>
      </div>
    );
}

export default GameIcon;