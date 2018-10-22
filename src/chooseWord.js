import React from 'react'

const ChooseWord = (props) => {
  return(
    <form onSubmit={(e) => {e.preventDefault(); props.chooseWord(e.target.childNodes[0].value)}} >
      <input/>
      <input type="submit"/>
    </form>
  )
}


export default ChooseWord
