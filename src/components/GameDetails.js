import React from 'react';

function GameDetails(props) {
    return (
        <div>
        {props.games.map(game => {
            return (
                <div>
                <div>{game.name}</div>
                </div>
            )
        })}
        </div>
    )
}

export default GameDetails