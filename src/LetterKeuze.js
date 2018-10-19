import React, {Component} from 'react'
import Letters from './Letters'

class LetterKeuze extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(letter){
    this.props.inputLetter(letter);
  }

  render(){
    return (
    <div className = {this.props.className}>
      <Letters handleClick={this.props.handleClick}/>
    </div>
  )}
}

export default LetterKeuze
