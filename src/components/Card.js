import React from 'react';
import { Link } from 'react-router-dom';

function Card(game) {
    return (
        <div className='card-container'>
            <div>
                <p className='game-name'>{game.name}</p>
                <Link to={`/civdetails/${game.id}`} key={game.id}>
                <button className='info-link'>More Info</button>
                </Link>
            </div>
        </div>
    )
}

export default Card
