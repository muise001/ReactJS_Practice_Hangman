import React from 'react'

const ChooseWord = (props) => {
  return(
    <div className={props.className}>
      <input onChange={props.handleTyping}/>
      <button onClick={props.setWord}>Submit word</button>
    </div>
  )
}

export default ChooseWord
