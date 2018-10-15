import React, {Component} from 'react'
import Letter from './letter'
import GuessWord from './gokWoord'

class LetterKeuze extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.guessFullWord = this.guessFullWord.bind(this)
  }

  handleClick(e){
    var wrong = 0
    var filtered = this.props.chosenWord.filter((letter) => {
      return letter === e.target.name
    });

    this.props.chosenWord.forEach((letterInChosenWord, i) => {
      if (letterInChosenWord.includes(e.target.name)) {
        this.props.showLetter(i)
        this.props.scoreboardHandle(filtered.length)
      } else {
        wrong++
        if (wrong === this.props.chosenWord.length) {
          this.props.scoreboardHandle()
        }
      }
    })
  }

  guessFullWord(e, inputValue){
    e.preventDefault()
    var chosenWord = this.props.chosenWord
    chosenWord = chosenWord.toString().replace(/,/g, "")
    console.log(chosenWord);
    if (inputValue === chosenWord) {
      console.log('goed geradern');
      this.props.scoreboardHandle('goed')
    } else {
      this.props.scoreboardHandle('fout')
    }
  }

  render(){
    return (
    <div className = {this.props.className}>
      <Letter
        displayWord = {this.props.displayWord}
        chosenWord = {this.props.chosenWord}
        handleClick = {this.handleClick}
      />
      <GuessWord
        guessedWord = {this.props.guessedWord}
        guessFullWord = {this.guessFullWord}
      />
    </div>
  )}
}



export default LetterKeuze
