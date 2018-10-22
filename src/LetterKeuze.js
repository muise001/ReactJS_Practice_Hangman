import React, {Component} from 'react'
import Letters from './Letter'

class LetterKeuze extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e, letter){
    e.setAttribute("style", "opacity:0")
    this.props.inputLetter(letter);
  }

  render(){
    return (
    <div className = {this.props.className}>
      <Letters handleClick={this.handleClick}/>
    </div>
  )}
}

export default LetterKeuze
