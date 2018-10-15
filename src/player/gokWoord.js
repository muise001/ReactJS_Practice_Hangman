import React, {Component} from 'react'

class GuessWord extends Component{
  constructor(props){
    super(props)
    this.state = {
      inputValue : ""
    }
    this.setInputValue = this.setInputValue.bind(this)
  }

  setInputValue(e){
    this.setState({
      inputValue : e.target.value
    })
  }

  render(){
    return (
      <form onSubmit={(e) => {this.props.guessFullWord(e, this.state.inputValue)}} >
        <input onChange={this.setInputValue} name="guessFullWord"/>
        <input type="submit"/>
        </form>
      )}
}

export default GuessWord
