import './App.css';
import { useState } from 'react';

const App = () => {

  const QandA = {
    "introQ": "introA",
    "bazinga1": "badingi1",
    "bazinga2": "badingi2",
    "bazinga3": "badingi3",
    "bazinga4": "badingi4",
    "bazinga5": "badingi5",
  };

  const [currentQuestion, setCurrentQuestion] = useState(""); // by default, this should be the first key/value pair
  const [currentAnswer, setCurrentAnswer] = useState(""); // by default, this should be the first key/value pair

  const handleFlashcard = () => {
    // generate random index
    // use setcurrentquestion to set currentquestion to the random key in QandA
    // use setcurrentanswer to set currentanswer to the corresponding answer for the random question
    // remove the introQ + introA key/value pair from the dictionary
  }

  return (
    <div className="container">
      <h1 className="headers"> Basic Japanese! 🇯🇵 </h1>
      <h2 className="headers"> Departing to Japan soon? Or just curious about the language of Japan? Test your knowledge here! </h2>
      <h4 className="headers"> Number of cards: </h4>

      <div className="flashcard">
        <h3> CURRENT QUESTION PLACEHOLDER: {currentQuestion} </h3>
        <h3> CURRENT ANSWER PLACEHOLDER: {currentAnswer} </h3>
        <button> test button to switch between questions </button> {/* onclick calls handleflashcard, should remove the placeholder question + answer */}
      </div>

    </div>
  )
}

export default App;