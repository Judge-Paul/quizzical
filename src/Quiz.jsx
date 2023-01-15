import React, { useEffect, useState } from 'react'
import Question from './Question'
import { nanoid } from 'nanoid'
import { decode } from 'html-entities'

export default function Quiz(props) {
    const {amount, category, difficulty, type} = props.apiData
    const [quiz, setQuiz] = useState([])
    const apiURL = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`
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
        let correctAnswersCount = 0;
        if (!isDone) {
            setQuiz(quizItem => quizItem.map( q => {
                if (q.selected === q.answer) {
                    correctAnswersCount += 1
                    getCorrectAnswers(correctAnswersCount)
                    console.log(correctAnswersCount)
                    return {...q, isCorrect: true}
                } else {
                    return {...q, isCorrect: false}
                }
            }))
            setIsDone(true)
        } else {
            window.location.reload(true)
        }
    }
    
    function getCorrectAnswers(answers) {
        setCorrectAnswers(answers/2)
    }

    const quizElements = quiz.map(quizData => {
        return (<Question
            key = {quizData.id}
            questionId = {quizData.id}
            selected = {quizData.selected}
            question = {quizData.question}
            options = {quizData.options}
            answer = {quizData.answer}
            isDone = {isDone}
            isCorrect = {quizData.isCorrect}
            setPressed = {setPressed}
        />)
    })

    return(
        <div className="quiz-sec mt-3">
            {quizElements}
            <div className="answers-sec text-center my-5"> 
                {isDone && `You got ${correctAnswers} / ${quiz.length} questions right or ${(correctAnswers/quiz.length) * 100}%`}
                <button className="btn action-btn ml-4 mt-3" onClick={handleGame}>
                    {isDone ? "Play Again" : "Check Answers"}
                </button>
            </div>
        </div>
    )
}