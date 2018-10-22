import React, {Component} from 'react'
import LetterKeuze from './LetterKeuze'
import ScoreBoard from './feedback/scoreBoard'
import DisplayWord from './DisplayWord'
import GuessWord from './GuessWord'
import PlayAgain from './PlayAgain'

class GameArea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      word : props.word,
      chosenLetters : [],
      gameProgress : '',
      score : {
        right : 0,
        wrong : 0,
        turns: 0,
      }
    }

    this.updateScore = this.updateScore.bind(this)
    this.handleGuessWord = this.handleGuessWord.bind(this)
    this.checkGameOver = this.checkGameOver.bind(this)
  }

  updateScore(letter) {
    let {chosenLetters, word} = this.state;
    let {wrong, turns} = this.state.score
    let arr = chosenLetters;
    arr.push(letter);
    let incW = !word.indexOf(letter) > -1 ? 1 : 0;
    this.setState({
      chosenLetters: arr,
      score : {
        turns: turns + 1,
        wrong: wrong + incW
      }
    })
    this.checkGameOver(incW, word, chosenLetters, wrong)
  }

  checkGameOver(incW, word, chosenLetters, wrong){
    let arr = []
    word.split("").map((letter) => {
      let char = chosenLetters.indexOf(letter) > -1 ? letter : ".";
      arr.push(char)
    })
    let won = arr.toString().replace(/,/g, "") === word ? true : false
    let lost = wrong + incW === 7 ? true : false
    return won ? this.gameOver('won') : (lost ? this.gameOver('lost') : false)
  }

  gameOver(state){
    this.setState({
      chosenLetters : this.state.word.split(""),
      gameProgress : state
    })
  }

  handleGuessWord(word) {
    if (this.state.word === word){
      this.checkGameOver(0, this.state.word, word.split(""), this.state.score.wrong)
    } else {
      this.updateScore("1") // tering lelijke hack
    }
  }

  render() {
      if (this.state.gameProgress) {
        return(
        <div>
          <div className="feedback">
            <DisplayWord
              word={this.state.word}
              chosenLetters={this.state.chosenLetters}
            />
            <ScoreBoard
              gameProgress = {this.state.gameProgress}
              score={this.state.score}
            />
          </div>
          <div className="menus">
            <PlayAgain
              gameProgress={this.state.gameProgress}
              chooseWord={this.props.chooseWord}
            />
          </div>
        </div>
      )} else {
      return (
      <div>
        <div className="feedback">
          <DisplayWord
            word={this.state.word}
            chosenLetters={this.state.chosenLetters}
          />
          <ScoreBoard
            gameProgress = {this.state.gameProgress}
            score={this.state.score}
          />
        </div>
        <div className="menus">
          <LetterKeuze
            inputLetter={this.updateScore}
          />
          <GuessWord
            guessedWord={this.handleGuessWord}
          />
        </div>
      </div>
    )}
  }
}

export default GameArea;
