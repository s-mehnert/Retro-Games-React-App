import React from "react";

let selectedGame = "default";

function GameIcon(props) {
    
    function handleClick() {
      // alert('Successfully clicked --- placeholder text');
      selectedGame = props.name;
    }
    // need to include the following attribute in img: onClick={handleClick}

    return (
        <figure>
            <a href="#.Game-box" onClick={handleClick}>
                <img src={props.src} alt={props.alt} title={props.alt} />
            </a>
            <figcaption>{props.alt}</figcaption>
        </figure>
    );
}

export { selectedGame };
export default GameIcon;