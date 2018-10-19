import React from 'react'

const Letters = (props) => {
  const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

  const ButtonsWithLetters = letters.map((letter, i) => {
    return <button key={i} onClick={() => props.handleClick(letter)} >{letter}</button>
  })

  return (
    <div>
      {ButtonsWithLetters}
    </div>
  )

}

export default Letters
