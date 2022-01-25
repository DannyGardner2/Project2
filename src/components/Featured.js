import React from 'react';

function Featured(props) {
    return (
        <div className='featured-container'>
            {props.games.map(game => {
                return (
                    <div>
                        <div>{game.title}</div>
                    </div>
                )
            })}
        </div>

    )
}

export default Featured