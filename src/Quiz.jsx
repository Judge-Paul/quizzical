import React, { useEffect, useState } from 'react'
import Question from './Question'
import { nanoid } from 'nanoid'
import { decode } from 'html-entities'

export default function Quiz() {
    const [quiz, setQuiz] = useState([])
    const apiURL = "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple"
    const [questionsData, setQuestionsData] = useState([])
    const [correctAnswers, setCorrectAnswers] = useState(0) 
    const [isDone, setIsDone] = useState(false)

    useEffect(() => {
            const fetchData = async () => {
                const result = await fetch(apiURL)
                result.json()
                    .then(json => json.results)
                    .then(dataRequest => setQuestionsData(dataRequest))
            }
            fetchData()
        }, [])


    function setPressed(questionId, selectedOption) {
        setQuiz(quizData => quizData.map( q => {
            return questionId === q.id ?
            ({...q, selected: selectedOption}) :
            q
        }
        ))
    }
    
    let objectList = []
    useEffect(() => {
        setQuiz(questionsData.map(question => {
        let newObject = {question: "", options: [], answer: "", id: ""}
        let optionsList = question.incorrect_answers
        optionsList.push(question.correct_answer)
        optionsList.sort(() => Math.random() - 0.5)
        let optionsObjectList = []
        const options = optionsList.map(option => {
            let optionsObject = {id: "", option: ""}
            optionsObject.id = nanoid()
            optionsObject.option = decode(option)
            optionsObjectList.push(optionsObject)
            return optionsObjectList
        })
        newObject.options = options
        newObject.question = decode(question.question)
        newObject.answer = decode(question.correct_answer)
        newObject.id = nanoid()
        return newObject
        }))
    }, [questionsData])

    function handleGame() {
        setQuiz(quizItem => quizItem.map( q => {
            setIsDone(true)
            if (q.selected === q.answer) {
                setCorrectAnswers(currCorrectAnswers => currCorrectAnswers + 1)
                return {...q, isCorrect: true}
            } else {
                return {...q, isCorrect: false}
            }
        }))
    }

    console.log(quiz)
    const quizElements = quiz.map(quizData => {
        return (<Question
            key = {quizData.id}
            questionId = {quizData.id}
            selected = {quizData.selected}
            question = {quizData.question}
            options = {quizData.options}
            isDone = {isDone}
            isCorrect = {quizData.isCorrect}
            setPressed = {setPressed}
        />)
    }
    )
    return(
        <div className="quiz-sec mt-3">
            {quizElements}
            <div className="text-center my-5">
                <button className="btn action-btn" onClick={handleGame}>Check Answers</button>
            </div>
        </div>
    )
}