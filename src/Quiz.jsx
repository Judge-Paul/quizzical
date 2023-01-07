import React from 'react'
import Question from './Question.jsx'

export default function Quiz() {
    const answers = ["Adios", "Hola", "Au Revoir", "Salir"]
    return(
        <div className="quiz-sec">
            <Question question="How would one say goodbye in Spanish?" answers={answers} />
        </div>
    )
}