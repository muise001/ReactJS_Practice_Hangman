import React from 'react'


const ScoreBoard = (props) => {
  console.log(props);
  var endGame = ""
  if (props.wrong === 7) {
    endGame = "You Lost"
  } else if (!props.displayWord.includes('.') && props.className === "startGame") {
    endGame = "You Win"
  }
  return (
    <div>
      <h1> {endGame} </h1>
      <p> Wrong : {props.wrong} / 7 </p>
      <p> Turns : {props.turns} </p>
    </div>
  )
}

export default ScoreBoard
