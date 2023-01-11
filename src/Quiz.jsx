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
    function setPressed(id) {
    }
    let newObject = {question: "", options: [], answer: "", id: ""}
    let optionsList = question.incorrect_answers
    optionsList.push(question.correct_answer)
    optionsList.sort(() => Math.random() - 0.5)
    const optionElements = optionsList.map(option => {    
        let optionsObject = {id: "", option: ""}
        optionsObject.id = nanoid()
        optionsObject.option = option
        return (<button 
            onClick={(event) => setPressed(optionsObject.id)} 
            key={optionsObject.id} 
            className="btn mr-4 px-4 mt-2">
                {optionsObject.option}
            </button>)
    })
    newObject.question = question.question
    newObject.answer = question.correct_answer
    newObject.id = nanoid()
    return (<Question
        key = {newObject.id}
        question = {newObject.question}
        options = {optionElements}
        />)
    }))
}, [questions])

    
    return(
        <div className="quiz-sec">
            {quiz}
        </div>
    )
}