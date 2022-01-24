import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function GameDetails(props) {
    const {id} = useParams([])
    const categories = {
        key: process.env.REACT_APP_GAMES_KEY,
        api: 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=racing' + id,
      }
      const url = `${categories.api}`
      const [games, setGames] = useState([])
      const key = process.env.REACT_APP_GAMES_KEY
      useEffect(()=> {
        fetch(url, {
          
          "method": "GET",
          "headers": {
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
        <div className='info-container'>
        {props.games.map(game => {
            return (
                <div>
                <div>{game.title}asdasd</div>
                </div>
            )
        })}
        </div>
    )
}

export default GameDetails