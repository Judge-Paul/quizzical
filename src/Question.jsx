import React from 'react'

export default function Question(props) {
    return (
        <>
            <p className="quiz--question">{props.question}</p>
                {props.options}
            <hr />
        </>
    )
}