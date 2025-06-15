import './App.css';
import { useState } from 'react';

const App = () => {

  const QandA = {
    "Hello!": "Kon'nichiwa!", // greeting
    "Nice to meet you": "Onegai shimasu", // greeting
    "Excuse me": "Sumimasen", // greeting
    "Thank you": "Arigatōgozaimasu", // greeting
    "Yes": "Hai", // greeting
    "No": "Īe", // greeting
    "Left": "Hidari", // directions
    "Right": "Migi", // directions
    "Bathroom": "Basurūmu", // places 
    "Entrance": "Iriguchi", // places
    "One (number)": "Ichi", // numbers
    "Two (number)": "Ni", // numbers
    "Three (number)": "San", // numbers
    "Four (number)": "Shi", // numbers
    "Five (number)": "Go", // numbers
    "Six (number)": "Roku", // numbers
    "Seven (number)": "Shichi", // numbers
    "Eight (number)": "Hachi", // numbers
    "Nine (number)": "Kyu", // numbers
    "Ten (number)": "Ju", // numbers
  };

  // that was over engineered i'm just gonna type it in myself bruh
  const [currentQuestion, setCurrentQuestion] = useState("Welcome! Hover over flashcards to flip them over, instructions are on the back of THIS card."); 
  const [currentAnswer, setCurrentAnswer] = useState("The front of a card will always be a COLORED card, the back will be WHITE - English on the FRONT, Japanese on BACK! Good luck and happy studying!"); 
  const [flashcardColorClass, setflashcardColorClass] = useState("flashcard-color-default");
  const [count, setCount] = useState(0);

  const questions = Object.keys(QandA);

  const greetings = ["Hello!", "Nice to meet you", "Excuse me", "Thank you", "Yes", "No"];
  const numbers = ["One (number)", "Two (number)", "Three (number)", "Four (number)", "Five (number)", "Six (number)", "Seven (number)", "Eight (number)", "Nine (number)", "Ten (number)"];
  const directions = ["Left", "Right"];
  const places = ["Bathroom", "Entrance"];

  const handleFlashcard = () => {
    let random = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[random]);
    setCurrentAnswer(QandA[questions[random]]);

    if (greetings.includes(questions[random])) { // phrases
      setflashcardColorClass("flashcard-color-red");
    } else if (numbers.includes(questions[random])) { // numbers
      setflashcardColorClass("flashcard-color-green");
    } else if (directions.includes(questions[random])) { // directions
      setflashcardColorClass("flashcard-color-yellow");
    } else if (places.includes(questions[random])) { // places
      setflashcardColorClass("flashcard-color-blue");
    } 
  }

  const flipCard = () => {
    setCount(count + 1);
    if (count % 2 == 0) {
      // flip back to front of card (FRONT)
    } else {
      // flip to back of card (BACK)
    }
  }

  return (
    <div className="container">
      <div className="header-container">
        <h1> Basic Japanese! 🇯🇵 </h1>
        <h2> Departing to Japan soon? Or just curious about the language of Japan? Test your knowledge here! </h2>
        <h4> Number of cards: {questions.length} </h4>
      </div>

      <dl className="question-legend">
        <dt className="flashcard-color-red"></dt>
        <dd>greetings</dd>

        <dt className="flashcard-color-green"></dt>
        <dd>numbers</dd>

        <dt className="flashcard-color-yellow"></dt>
        <dd>directions</dd>

        <dt className="flashcard-color-blue"></dt>
        <dd>places</dd>
      </dl>

      <div className="flashcard" onClick={flipCard}>
        <div className="flashcard-inner">
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