import React from "react"
import Card from "./Card"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";


function Results(props) {
  const [category, setCategory] = useState()
  let genre = useParams().genre
  const key = process.env.REACT_APP_GAMES_KEY
  const categories = {
    key: process.env.REACT_APP_GAMES_KEY,
    api: `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${genre}`
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
        setCategory(res)
      })
  }, [genre])
  if (!category) {
    return (
      <p>Loading</p>
    )
  }
  return (
    <div className='results-container'>
      <div className="genre-name">
        <h1>{genre} games:</h1>
      </div>
      {category.map(game =>
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

export default Results