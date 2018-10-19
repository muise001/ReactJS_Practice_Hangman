import React, {Component} from 'react'
import ChooseWord from './chooseWord'
import LetterKeuze from './player/letterKeuze'
import ShowWord from './feedback/woordDisplay'
import ScoreBoard from './feedback/scoreBoard'

class GameArea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      word : "",
      chosenLetters : [],
      score : {
        right : 0,
        wrong : 0,
        turns: 0,
      }
    }

    // this.udpateScore.bind(this)
    // this.checkWordHasLetter.bind(this)
    // this.handleGuessWord.bind(this)
  }

  updateScore(letter) {
    let { right, wrong, turns, chosenLetters } = this.state;
    let score = this.checkWordHasLetter(letter);
    let incR = score ? 1 : 0;
    let incW = !score ? 1 : 0;

    this.setState({
      chosenLetters: chosenLetters.push(letter),
      right: right + incR,
      turns: turns + 1,
      wrong: wrong + incW
    })
  }

  checkWordHasLetter(letter) {
    return this.state.word.indexOf(letter) > -1;
  }

  handleGuessWord(word) {
    // If word is guessed right
    if (this.state.word === word.toLowerCase())
      return this.setState({
        chosenLetters: word.split('')
      })

    this.updateScore("1") // tering lelijke hack
  }

  render() {
        return (
      <div>
        <div className="feedback">
          <DisplayWord
            word={this.state.word}
            chosenLetters={this.state.chosenLetters} />
          <ScoreBoard score={this.state.score}/>
        </div>

        <div className="menus">
          <LetterKeuze
            inputLetter={this.props.updateScore}
          />
          <GuessWord guessedWord={this.props.handleGuessWord} />
        </div>
      </div>
    )
  }
}

export default GameArea;

GameArea.updateScore("b") //?? this.state.score ++
