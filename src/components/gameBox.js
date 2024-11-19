import React from "react";

function GameBox(props) {
    return (
        <>
            <h2>Play <a href={props.src} target="_blank">{props.game}</a> on original page</h2>
            <iframe allow="fullscreen" className="game-window" id={props.game} src={props.src}></iframe>
        </>
    );
}

export default GameBox;