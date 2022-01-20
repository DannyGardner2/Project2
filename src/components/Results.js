import React from "react"
import Card from "./Card"

function Results(props) {
    return (
      <div className='results-container'>
          {props.civs.map(civ => {
              return (
                  <Card
                  name={civ.name}
                  expansion={civ.expansion}
                  type={civ.army_type}
                  />
              )
          })}
      </div>
    )
  }

  export default Results