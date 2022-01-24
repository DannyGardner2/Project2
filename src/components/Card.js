import React from 'react';
import { Link } from 'react-router-dom';

function Card(game) {
    return (
        <Link to={`/games/${game.id}`} key={game.id}>
            <div className='card-container'>
                <div>
                    <img src={game.thumbnail} alt={game.title}/>
                    <p className='game-name'>{game.name}</p>
                    <p className='game-genre'>{game.genre}</p>
                    <p className='game-platform'>{game.platform}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card
