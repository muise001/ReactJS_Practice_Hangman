import React, {Component} from 'react'
import ChooseWord from './ChooseWord'
import GameArea from './GameArea'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      word : ''
    }
    this.chooseWord = this.chooseWord.bind(this)
  }

  chooseWord(word) {
    console.log(word);
    this.setState({
      word
    });
  }

  render(){
    return !this.state.word ? <ChooseWord chooseWord={this.chooseWord} /> : <GameArea chooseWord={this.chooseWord} word={this.state.word} />
  }
}

export default App
