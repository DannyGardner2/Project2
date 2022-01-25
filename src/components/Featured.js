import React, { useState, useEffect } from 'react';
import Card from './Card';

function Featured() {
    const [games, setGames] = useState([])
    const categories = {
        key: process.env.REACT_APP_GAMES_KEY,
        api: `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=mmorpg&sort-by=release-date`,
    }
    const url = `${categories.api}`
    const key = process.env.REACT_APP_GAMES_KEY
    useEffect(() => {
        fetch(url, {
            
            "method": "GET",
            "headers": {
                "resultsPerPage": "5",
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                "x-rapidapi-key": `${key}`
            }
        })
        .then((res) => res.json())
        .then((res) => {
            setGames(res)
        })
    }, [])
    return (
        <div className='featured-container'>
            <div className="genre-name">
                <h1>Recent Games:</h1>
            </div>
            {games.map(game =>
            (
                <Card
                    key={game.id}
                    id={game.id}
                    name={game.title}
                    thumbnail={game.thumbnail}
                    genre={game.genre}
                    platform={game.platform}
                />
            )
            )}
        </div>

    )
}

export default Featured