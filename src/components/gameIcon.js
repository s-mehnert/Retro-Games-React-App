import React from "react";

function GameIcon(props) {
    
  const handleClick = event => {
    const newGame = event.target.name;
    props.handler(newGame);
  };

    return (
        <figure>
          <img name={props.name} src={props.src} alt={props.alt} title={props.alt} onClick={handleClick} />
          <figcaption>{props.alt}</figcaption>
        </figure>
    );
}

export default GameIcon;