import React, { useEffect, useState } from 'react'
import Question from './Question'
import { nanoid } from 'nanoid'

export default function Quiz() {
    const [quiz, setQuiz] = useState([])
    const [questions, setQuestions] = useState([])
    const answers = ["Adios", "Hola", "Au Revoir", "Salir"]
    
    const apiURL = "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple"
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(apiURL)
            let quizResult = []
            result.json()
                .then(json => setQuiz(json.results))
        }
        fetchData()
    }, [])

    const questionElements = quiz.map( quizData => {
        const question = decodeURIComponent(quizData.question);
        return (<Question
        key={nanoid()}
        question={question}
        answers={answers}
        />)
    })
    return(
        <div className="quiz-sec">
            {questionElements}
        </div>
    )
}