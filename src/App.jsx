import './App.css';
import { useState } from 'react';

const App = () => {

  const QandA = {
    "question1": "badingi1",
    "question2": "badingi2",
    "question3": "badingi3",
    "question4": "badingi4",
    "question5": "badingi5",
    "question6": "badingi6",
    "question7": "badingi7",
    "question8": "badingi8",
    "question9": "badingi9",
    "question10": "badingi10",
  };

  // that was over engineered i'm just gonna type it in myself bruh
  const [currentQuestion, setCurrentQuestion] = useState("introQ"); 
  const [currentAnswer, setCurrentAnswer] = useState("introA"); 

  const questions = Object.keys(QandA);

  const handleFlashcard = () => {
    let random = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[random]);
    setCurrentAnswer(QandA[questions[random]]);
  }

  return (
    <div className="container">
      <div className="header-container">
        <h1> Basic Japanese! 🇯🇵 </h1>
        <h2> Departing to Japan soon? Or just curious about the language of Japan? Test your knowledge here! </h2>
        <h4> Number of cards: {questions.length} </h4>
      </div>

      <div className="flashcard">
        <div class="flashcard-inner">
          <div className="flashcard-front">
            <h3> CURRENT QUESTION PLACEHOLDER: {currentQuestion} </h3>
          </div>
          <div className="flashcard-back">
            <h3> CURRENT ANSWER PLACEHOLDER: {currentAnswer} </h3>
          </div>
        </div>
      </div>

      <button onClick={handleFlashcard}> &rarr; </button> 

    </div>
  )
}

export default App;