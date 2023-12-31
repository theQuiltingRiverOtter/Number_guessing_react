import { useState } from 'react'
import './App.css'
import Form from "./Form.jsx"
import Message from "./Message.jsx"


function App() {
  const [answer, setAnswer] = useState(Math.floor(Math.random() * 100) + 1)
  const [attempts, setAttempts] = useState([])
  const [win, setWin] = useState(false);
  const [lower, setLower] = useState(0)
  const [higher, setHigher] = useState(101)


  const guessNumber = (e) => {
    e.preventDefault();
    let guess = Number(e.target[0].value);
    if (guess == answer) {
      setWin(true)
    } else {
      setAttempts([...attempts, guess])
      if (answer < guess) {
        setHigher(guess)
      } else {
        setLower(guess)
      }
    }
    e.target[0].value = '';
  }
  const playAgain = () => {
    setAnswer(Math.floor(Math.random() * 100) + 1);
    setAttempts([]);
    setWin(false);
    setLower(0);
    setHigher(101);
  }

  return (
    <>
      <h1>Guess the Number</h1>
      {attempts.length < 7 && <Form guessNumber={guessNumber} />}
      {attempts.length >= 7 && <p>Sorry, too many guesses. The answer was {answer}</p>}
      <Message lower_index={lower} higher_index={higher} />
      {win && <p>You got it, the answer was {answer}</p>}
      {(win || attempts.length >= 7) && <button onClick={playAgain}>Play Again</button>}
      <h2>Attempts</h2>
      <ul>
        {attempts.map((attempt, idx) => {
          return (<li key={idx}>{attempt}</li>)
        })}
      </ul>
    </>
  )
}

export default App
