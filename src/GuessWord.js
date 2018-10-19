import React, {Component} from 'react'

class GuessWord extends Component{
  constructor(props){
    super(props)
    // this.state = {
    //   inputValue : ""
    // }
    this.setInputValue = this.setInputValue.bind(this)
  }

  setInputValue(e){
    this.props.guessedWord(e.target.childNodes[0].value)
  }

  render() {
    return (
      <form onSubmit={this.inputValue} >
        <input name="guessFullWord"/>
        <input type="submit"/>
      </form>
    )
  }
}

export default GuessWord
