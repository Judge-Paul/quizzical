import React from 'react'

export default function Question(props) {
    const optionElements = props.options[0].map(optionsObject => {
        if (props.isDone) {
            const classString = props.isCorrect ? "btn mr-4 px-4 mt-2 option-btn correct" : "btn mr-4 px-4 mt-2 option-btn incorrect"
            return (
                <button 
                onClick={(event) => props.setPressed(props.questionId, optionsObject.option)} 
                key={optionsObject.id} 
                className={classString}>
                    {optionsObject.option}
                </button>
            )
        } else {
            const classString = props.selected === optionsObject.option ? "btn mr-4 px-4 mt-2 option-btn pressed" : "btn mr-4 px-4 mt-2 option-btn"
            return (
                    <button 
                    onClick={(event) => props.setPressed(props.questionId, optionsObject.option)} 
                    key={optionsObject.id} 
                    className={classString}>
                        {optionsObject.option}
                    </button>
                )
        }
    }
    )
    return (
        <>
            <p className="quiz--question">{props.question}</p>
                <div className="quiz--options text-center-md">
                    {optionElements}
                </div>
            <hr />
        </>
    )
}