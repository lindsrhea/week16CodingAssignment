import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Quiz() {

    // Properties
    const [showFinalResults, setFinalResults] = useState(false);
    const [score, setScore] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = [
        {
            text: "Where would you be if you were standing on the Spanish Steps?",
            options: [
                { id: 0, text: "Greece", isCorrect: false },
                { id: 1, text: "Rome", isCorrect: true },
                { id: 2, text: "Spain", isCorrect: false },
                { id: 3, text: "England", isCorrect: false },
            ],
        },

        {
            text: "What country drinks the most coffee per capita?",
            options: [
                { id: 0, text: "United States", isCorrect: false },
                { id: 1, text: "Dominican Republic", isCorrect: false },
                { id: 2, text: "Jamaica", isCorrect: false },
                { id: 3, text: "Finland", isCorrect: true },
            ],
        },

        {
            text: "Which planet has the most moons?",
            options: [
                { id: 0, text: "Jupiter", isCorrect: false },
                { id: 1, text: "Neptune", isCorrect: false },
                { id: 2, text: "Saturn", isCorrect: true },
                { id: 3, text: "Uranus", isCorrect: false },
            ],
        },

        {
            text: "What is a group of crows called?",
            options: [
                { id: 0, text: "A murder", isCorrect: true },
                { id: 1, text: "A shadow", isCorrect: false },
                { id: 2, text: "An army", isCorrect: false },
                { id: 3, text: "A cloud", isCorrect: false },
            ],
        },

        {
            text: "What is the capital of Ireland?",
            options: [
                { id: 0, text: "Belfest", isCorrect: false },
                { id: 1, text: "Cork", isCorrect: false },
                { id: 2, text: "Dublin", isCorrect: true },
                { id: 3, text: "Derry", isCorrect: false },
            ],
        },

        {
            text: "What meat is used in a shepherd's pie?",
            options: [
                { id: 0, text: "Lamb", isCorrect: true },
                { id: 1, text: "Beef", isCorrect: false },
                { id: 2, text: "Chicken", isCorrect: false },
                { id: 3, text: "Tofu", isCorrect: false },
            ],
        },

        {
            text: "Sweet Sixteen and Honeycrisp originate from which state?",
            options: [
                { id: 0, text: "South Carolina", isCorrect: false },
                { id: 1, text: "Minnesota", isCorrect: true },
                { id: 2, text: "Tennesee", isCorrect: false },
                { id: 3, text: "Louisiana", isCorrect: false },
            ],
        },

        {
            text: "How many 'Academy Awards for Best Original Song' has Disney won?",
            options: [
                { id: 0, text: "15", isCorrect: false },
                { id: 1, text: "22", isCorrect: false },
                { id: 2, text: "17", isCorrect: false },
                { id: 3, text: "14", isCorrect: true },
            ],
        },

        {
            text: "What is the most popular drink in the world that is not alcohol?",
            options: [
                { id: 0, text: "Soda", isCorrect: false },
                { id: 1, text: "Coffee", isCorrect: true },
                { id: 2, text: "Water", isCorrect: false },
                { id: 3, text: "Tea", isCorrect: false },
            ],
        },

        {
            text: "What is the hardest rock?",
            options: [
                { id: 0, text: "A diamond", isCorrect: true },
                { id: 1, text: "A corudum", isCorrect: false },
                { id: 2, text: "A topaz", isCorrect: false },
                { id: 3, text: "A quartz", isCorrect: false },
            ],
        },
    ]

    // Helper Functions
    const optionClicked = (isCorrect) => {
        if( isCorrect ) {
            setScore(score + 1);
        }

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setFinalResults(true);
        }
    }

    // Restart Game Button
    const restartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setFinalResults(false);
    }

    return (
        <>
        <div className="App">
            {/* 1. Header */}
            <h1>Fun Random Questions Quiz</h1>

            {/* 2. Current Score */}
            <h2>Current Score: {score}</h2>

            {showFinalResults ? (

            // 4. Final Results
            <div className='final-results'>
                <h1>Final Results</h1>
                <h2>{score} out of {questions.length} correct - ({(score/questions.length) * 100}%)</h2>
                <button onClick={() => restartGame()}>Restart Game</button>
            </div>
            ) : (

            // 3.Question Card
             <div className='question-card'>
                <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
                <h3 className='question-text'>{questions[currentQuestion].text}</h3>

                <ul>
                   {questions[currentQuestion].options.map((option) => {
                        return (
                            <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
                        );
                    })}
                </ul>
            </div>
            )}
        </div>
                <div className='links'>
                <Link to="./home">Go to Home Page</Link>
                <br></br>
                <Link to="./review">Submit a Review</Link>
                <br></br>
                <Link to="./about">What we're about</Link>
            </div>
        </>
    );
}
