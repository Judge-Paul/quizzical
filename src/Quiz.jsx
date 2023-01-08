import React, { useEffect, useState } from 'react'
import Question from './Question.jsx'

export default function Quiz() {
    const [quiz, setQuiz] = useState([])
    const [questions, setQuestions] = useState([])
    const answers = ["Adios", "Hola", "Au Revoir", "Salir"]
    
    const apiURL = "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple"
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(apiURL)
            result.json()
                .then(json => setQuiz(json.results))
        }
        fetchData()
    }, [])
    console.log(quiz)
    const questionElements = quiz.map( quizData => {
        return (<Question 
        question={quizData.question}
        answers={answers}
        />)
    })
    return(
        <div className="quiz-sec">
            {/* <Question question="How would one say goodbye in Spanish?" answers={answers} /> */}
            {questionElements}
        </div>
    )
}