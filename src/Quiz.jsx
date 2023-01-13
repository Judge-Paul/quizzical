import React, { useEffect, useState } from 'react'
import Question from './Question'
import { nanoid } from 'nanoid'
import { decode } from 'html-entities'

export default function Quiz() {
    const [quiz, setQuiz] = useState([])
    const apiURL = "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple"

    const [questionsData, setQuestionsData] = useState([]);

useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(apiURL)
            result.json()
                .then(json => json.results)
                .then(dataRequest => setQuestionsData(dataRequest))
        }
        fetchData()
    }, [])


useEffect(() => {
    setQuiz(questionsData.map(question => {
    function setPressed(id) {
    }
    let newObject = {question: "", options: [], answer: "", id: ""}
    let optionsList = question.incorrect_answers
    optionsList.push(question.correct_answer)
    optionsList.sort(() => Math.random() - 0.5)
    const optionElements = optionsList.map(option => {    
        let optionsObject = {id: "", option: "", isPressed: false}
        optionsObject.id = nanoid()
        optionsObject.option = option
        return (<button 
            onClick={(event) => setPressed(optionsObject.id)} 
            key={optionsObject.id} 
            className="btn mr-4 px-4 mt-2">
                {decode(optionsObject.option)}
            </button>)
    })
    newObject.question = decode(question.question)
    newObject.answer = question.correct_answer
    newObject.id = nanoid()
    return (<Question
        key = {newObject.id}
        question = {newObject.question}
        options = {optionElements}
        />)
    }))
}, [questionsData])

    
    return(
        <div className="quiz-sec">
            {quiz}
        </div>
    )
}