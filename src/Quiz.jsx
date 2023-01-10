import React, { useEffect, useState } from 'react'
import Question from './Question'
import { nanoid } from 'nanoid'

export default function Quiz() {
    const [quiz, setQuiz] = useState([])
    const apiURL = "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple"

    const [questions, setQuestions] = useState([]);

useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(apiURL)
            result.json()
                .then(json => json.results)
                .then(dataRequest => setQuestions(dataRequest))
        }
        fetchData()
    }, [])


useEffect(() => {
    setQuiz(questions.map(question => {
    let newObject = {question: "", options: [], answer: "", id: ""}
    newObject.question = question.question
    newObject.options = question.incorrect_answers
    newObject.options.push(question.correct_answer)
    newObject.answer = question.correct_answer
    newObject.id = nanoid()
    return (<Question
        key = {newObject.id}
        question = {newObject.question}
        options = {newObject.options}
        />)
    }))
}, [questions])

    
    return(
        <div className="quiz-sec">
            {quiz}
        </div>
    )
}