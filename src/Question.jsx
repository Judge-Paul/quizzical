import React from 'react'

export default function Question(props) {
    const optionElements = props.options[0].map(optionsObject => {
        if (props.isDone) {
            let classString
            // let classString = props.isCorrect ? "btn mr-4 px-4 mt-2 option-btn correct" : "btn mr-4 px-4 mt-2 option-btn incorrect"
            if (optionsObject.option === props.answer) {
                classString = "btn mr-4 px-4 mt-2 option-btn correct"
            } else if (props.selected === optionsObject.option && props.selected !== props.answer) {
                classString = "btn mr-4 px-4 mt-2 option-btn incorrect"
            } else {
                classString = "btn mr-4 px-4 mt-2 option-btn unchecked"
            }
            // if (props.isCorrect && props.selected === optionsObject.option) {
            //     classString = "btn mr-4 px-4 mt-2 option-btn correct"
            // } else if (props.isCorrect === true && props.selected !== optionsObject.option) {
            //     classString = "btn mr-4 px-4 mt-2 option-btn unchecked"
            // } else if (optionsObject.option === props.answer) {
            //     classString = "btn mr-4 px-4 mt-2 option-btn correct"
            // } else if (!props.isCorrect){
            //     classString = "btn mr-4 px-4 mt-2 option-btn incorrect"
            // } else {
            //     classString = "btn mr-4 px-4 mt-2 option-btn unchecked"
            // }
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