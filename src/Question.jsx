import React from 'react'

export default function Question(props) {
    const optionElements = props.options[0].map(optionsObject => {
        const classString = props.selected === optionsObject.option ? "btn mr-4 px-4 mt-2 pressed" : "btn mr-4 px-4 mt-2"
            return (
                <button 
                onClick={(event) => props.setPressed(props.questionId, optionsObject.option)} 
                key={optionsObject.id} 
                className={classString}>
                    {optionsObject.option}
                </button>)
        }
    )
    // return (<button 
        //     onClick={(event) => setPressed(optionsObject.id)} 
        //     key={optionsObject.id} 
        //     className="btn mr-4 px-4 mt-2">
        //         {decode(optionsObject.option)}
        //     </button>)
    return (
        <>
            <p className="quiz--question">{props.question}</p>
                {optionElements}
            <hr />
        </>
    )
}