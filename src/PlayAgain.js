import React from 'react'

const PlayAgain = (props) => {
  console.log(props);
  return props.gameProgress ? <button onClick={() => props.chooseWord("")}>Play Again</button> : <div/>
}

export default PlayAgain
