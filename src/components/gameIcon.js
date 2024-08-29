import React from "react";

function GameIcon(props) {
    
    function handleClick() {
      alert('Successfully clicked --- placeholder text');
    }
    // need to include the following attribute in img: onClick={handleClick}

    return (
        <figure>
            <a href={props.href} target="_blank" onClick={handleClick}>
                <img src={props.src} alt={props.alt} title={props.alt} />
            </a>
            <figcaption>{props.alt}</figcaption>
        </figure>
    );
}

export default GameIcon;