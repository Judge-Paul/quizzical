import React from 'react'

function Home(props) {
    return(
        <div className="d-flex flex-column align-items-center justify-content-center home-sec">
            <div className="home--text mb-3">
                Quizzical
            </div>
            <p>Welcome to Quizzical Nigeria's favorite free online trivia game.</p>
            <button className="btn mt-5" onClick={props.onClick}>Start quiz</button>
        </div>
    )
}

export default Home