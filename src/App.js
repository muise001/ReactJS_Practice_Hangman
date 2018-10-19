import React, {Component} from 'react'
import ChooseWord from './chooseWord'
import GameArea from './GameArea'

class App extends Component {
  constructor(props) {
    super(props)
    this.setWord = this.setWord.bind(this)
  }

  chooseWord(word) {
    this.setState({
      word: word
    });
  }

  render(){
    if (this.state.word)
      return <ChooseWord chooseWord={this.props.chooseWord} />

    return (<GameArea word={this.state.word} />)
  }
}

export default App
