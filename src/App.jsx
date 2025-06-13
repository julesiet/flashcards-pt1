import './App.css';
import { useState } from 'react';

const App = () => {

  const QandA = {
    "Hello": "badingi1", // phrase
    "Nice to meet you": "badingi2", // phrase
    "Excuse me": "badingi3", // phrase
    "Thank you": "badingi4", // phrase
    "Left": "badingi5", // directions
    "Right": "badingi6", // directions
    "Bathroom": "badingi7", // places 
    "Entrance": "badingi8", // places
    "One (number)": "badingi9", // numbers
    "Ten (number)": "badingi10", // numbers
  };

  // that was over engineered i'm just gonna type it in myself bruh
  const [currentQuestion, setCurrentQuestion] = useState("Welcome! Hover over flashcards to flip them over, instructions are on the back of THIS card."); 
  const [currentAnswer, setCurrentAnswer] = useState("The front of a card will always be a COLORED card, the back will be WHITE - phrase in Japanese on FRONT, translation on BACK! good luck!"); 
  const [flashcardColorClass, setflashcardColorClass] = useState("flashcard-color-default");

  const questions = Object.keys(QandA);

  const phrases = ["Hello", "Nice to meet you", "Excuse me", "Thank you"];
  const numbers = ["One (number)", "Ten (number)"];
  const directions = ["Left", "Right"];
  const places = ["Bathroom", "Entrance"];

  const handleFlashcard = () => {
    let random = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[random]);
    setCurrentAnswer(QandA[questions[random]]);

    if (phrases.includes(questions[random])) { // phrases
      console.log('yes!1');
      setflashcardColorClass("flashcard-color-red");
    } else if (numbers.includes(questions[random])) { // numbers
      console.log('yes!2');
      setflashcardColorClass("flashcard-color-green");
    } else if (directions.includes(questions[random])) { // directions
      console.log('yes!3');
      setflashcardColorClass("flashcard-color-yellow");
    } else if (places.includes(questions[random])) { // places
      console.log('yes!4');
      setflashcardColorClass("flashcard-color-blue");
    } 
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
          <div className={"flashcard-front " + flashcardColorClass}>
            <h3> {currentQuestion} </h3>
          </div>
          <div className="flashcard-back">
            <h3> {currentAnswer} </h3>
          </div>
        </div>
      </div>

      <button onClick={handleFlashcard} className="flashcard-button"> &rarr; </button> 

    </div>
  )
}

export default App;