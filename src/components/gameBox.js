import React from "react";

function GameBox(props) {
    return (
        <>
            <h2>{props.game}</h2>
            <iframe id={props.game} src={props.src}></iframe>
        </>
    );
}

export default GameBox;