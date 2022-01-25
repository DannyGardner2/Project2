import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function GameDetails() {
    const { id } = useParams([])
    const [gameInfo, setGameInfo] = useState([])
    const key = process.env.REACT_APP_GAMES_KEY
    const categories = {
        key: process.env.REACT_APP_GAMES_KEY,
        api: `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`
    }
    const url = `${categories.api}`
    useEffect(() => {
        fetch(url, {

            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                "x-rapidapi-key": `${key}`
            }
        })
            .then((res) => res.json())
            .then((res) => {
                setGameInfo(res)
            })
    }, [])
    return (
        <div className='info-container'>
            <div className='image'>
                <img src={gameInfo.thumbnail} alt={gameInfo.title} />
                <div className='details'>
                    <h1>{gameInfo.title}</h1>
                    <h2>{gameInfo.developer}</h2>
                    <h3>{gameInfo.short_description}</h3>
                    <p>{gameInfo.genre}</p>
                    <p><a href={gameInfo.game_url}>{gameInfo.game_url}</a></p>
                </div>
            </div>
        </div>
    )
}

export default GameDetails

{/* <div className='info-container'>
{gameInfo.map(game => {
    return (
        <div>
            <div>{game.title}asdasd</div>
        </div>
    )
})}
</div> */}