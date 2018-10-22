const DisplayWord = ({word, chosenLetters}) => {
  console.log(chosenLetters);
  let arr = []
  word.split("").map((letter) => {
    let char = chosenLetters.indexOf(letter) > -1 ? letter : ".";
    arr.push(char)
  })
  return(arr)
}

export default DisplayWord
