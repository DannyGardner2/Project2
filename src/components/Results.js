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
                  expansion={game.expansion}
                  type={game.army_type}
                  />
              )
          })}
      </div>
    )
  }

  export default Results