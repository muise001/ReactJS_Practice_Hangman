import React, {Component} from 'react'

import ChooseWord from './chooseWord'

import LetterKeuze from './player/letterKeuze'

import ShowWord from './feedback/woordDisplay'
import ScoreBoard from './feedback/scoreBoard'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenWord : [],
      displayWord : [],
      class : 'default',
      score : {
        right : 0,
        wrong : 0,
        turns: 0,
      }
    }
    this.setWord = this.setWord.bind(this)
    this.handleTyping = this.handleTyping.bind(this)
    this.showLetter = this.showLetter.bind(this)
    this.scoreboardHandle = this.scoreboardHandle.bind(this)
  }

  setWord(e){
    if (this.state.chosenWord.length > 2) {
      var chosenWord = this.state.chosenWord.toLowerCase()
      var splittedWord = chosenWord.split('')
      var displayWord = []
      splittedWord.forEach((value) => {
        displayWord.push('.')
      })
      this.setState({
        chosenWord : splittedWord,
        displayWord : displayWord,
        class: 'startGame'
      })
    } else {
        console.log('woord te kort');
    }
  }

  handleTyping(e){
    this.setState({chosenWord : e.target.value})
  }

  showLetter(i){
    const arr = this.state.displayWord;
    arr[i] = this.state.chosenWord[i];

    this.setState({
      displayWord : arr
    })
  }

  scoreboardHandle(e){
    if (typeof(e) === typeof(0) || e === "goed") {
      if (e === "goed") {
        e = this.state.chosenWord.length
        this.setState({
          displayWord : this.state.chosenWord
        })
      }
      console.log(e);
      this.setState({
        score : {
          ...this.state.score,
          right : this.state.score.right + e,
          turns : this.state.score.turns + 1
        }
      })
    } else {
      this.setState({
        score : {
          ...this.state.score,
          wrong : this.state.score.wrong + 1,
          turns : this.state.score.turns + 1
        }
      })
    }
  }

  render(){
    console.log(this.state.displayWord);
    // if (this.state.choosenWord)
    //   return <PickWordForm />
    //
    // return (<OtherForm chosenWord={this.state.chosenWord}/>)

    return (
      <div>
        <div className="menus">
          <ChooseWord
            className = {this.state.class}
            setWord = {this.setWord}
            handleTyping = {this.handleTyping}
          />
          <LetterKeuze
            scoreboardHandle = {this.scoreboardHandle}
            showLetter = {this.showLetter}
            displayWord = {this.state.displayWord}
            chosenWord = {this.state.chosenWord}
            className = {this.state.class}
          />
        </div>
        <div className="feedback">
          < ShowWord
            displayWord = {this.state.displayWord}
          />
          < ScoreBoard
            className = {this.state.class}
            wrong = {this.state.score.wrong}
            turns = {this.state.score.turns}
            displayWord = {this.state.displayWord}
          />
        </div>
      </div>
    )
  }
}

export default App
