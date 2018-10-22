import React from 'react'

const GuessWord = (props) => {
  const handleSubmit = (e) => {
    console.log('hih');
    e.preventDefault()
    console.log(e.target.childNodes[0].value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input />
      <input type="submit"/>
    </form>
  )
}

export default GuessWord
