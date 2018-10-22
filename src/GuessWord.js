import React from 'react'

const GuessWord = (props) => {
  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        props.guessedWord(e.target.childNodes[0].value)
      }} >
      <input name="guessFullWord"/>
      <input type="submit"/>
    </form>
  )
}

export default GuessWord
