import React, { useState } from "react";

function GameIcon(props) {
    const [selectedGame, setSelectedGame] = useState("");
    const handleClick = ({target}) => {
        setSelectedGame(target.title);
    };

    return (
      <div>
        <figure>
            <a href="#.Game-box" onClick={handleClick}>
                <img src={props.src} alt={props.alt} title={props.alt} />
            </a>
            <figcaption>{props.alt}</figcaption>
        </figure>
        <section>{selectedGame}</section>
      </div>
    );
}

export default GameIcon;