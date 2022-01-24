import React from "react"
import Card from "./Card"

function Results(props) {
    return (
      <div className='results-container'>
          {props.games.map(game => {
              return (
                  <Card
                  id={game.id}
                  name={game.title}
                  thumbnail={game.thumbnail}
                  genre={game.genre}
                  platform={game.platform}
                  />
              )
          })}
      </div>
    )
  }

  export default Results