import React from 'react'


const ScoreBoard = (props) => {
  return (
    <div>
      <h1>{props.gameProgress}</h1>
      <p>wrong : {props.score.wrong} / 7</p>
      <p>turns : {props.score.turns}</p>
    </div>
  )
}

export default ScoreBoard
