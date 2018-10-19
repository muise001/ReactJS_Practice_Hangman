const DisplayWord = ({word, chosenLetters}) => {
  word.split("").map((letter) => {
    let char = chosenLetters.indexOf(letter) > -1 ? letter : ".";
    return (<div><h1>{{char}}</h1></div>)
  })
}

export default DisplayWord
