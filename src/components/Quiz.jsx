import  { useState } from 'react';
import '../index.css';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "What does HTML Stands for?",
    options: ["HyperText Management Language", "HyperTool Markup Language", "HyperText Markup Language", "Hyperlink Markup Language"],
    answer: "HyperText Markup Language"
  },
  {
    question: "What does CSS stands for?",
    options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Custom Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "What is the capital of Japan?",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    answer: "Tokyo"
  },
  {
    question: "What is (5 * 3 * 2) / 6?     ",
    options: ["8", "10", "5", "6"],
    answer: "5"
  },
  {
    question: "What is the largest planet in Solar System?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter"
  },
  {
    question: "A book named 'Hamlet' is written by?",
    options: ["Shakespeare", "Dickens", "Tolkien", "Hemingway"],
    answer: "Shakespeare"
  },
  {
    question: "What is the boiling point of water?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    answer: "100°C"
  },
  {
    question: "What is the speed of light in atmosphere?",
    options: ["300,000 km/s", "150,000 km/s", "75,000 km/s", "1,000,000 km/s"],
    answer: "300,000 km/s"
  },
  {
    question: "What is the smallest prime number?  ",
    options: ["1", "2", "3", "5"],
    answer: "2"
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption('');
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          Thank You!
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].question}</div>
          </div>
          <div className="option-section">
            {questions[currentQuestion].options.map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                {option}
              </label>
            ))}
          </div>
          <div className="button-section">
            <button onClick={handleNext} disabled={!selectedOption}>
              {currentQuestion < questions.length - 1 ? 'Next' : 'Submit'}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
