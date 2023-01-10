import React from 'react'

export default function Question(props) {
    const optionElements = props.options.map(answer => <button key={answer} className="btn mr-4 px-4 mt-2 pressed">{answer}</button>)
    return (
        <>
            <p className="quiz--question">{props.question}</p>
                {optionElements}
            <hr />
        </>
    )
}