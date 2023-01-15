import React, { useState } from 'react'

function Home(props) {
    return(
        <div className="d-flex flex-column align-items-center justify-content-center home-sec">
            <div className="home--text mb-3">
                Quizzical
            </div>
            <div className="home--input text-center">
                <div className="home--input-options">
                    <label htmlFor="amount">Number of Questions:</label>
                    <input 
                        type="number" 
                        name="amount" 
                        id="amount" 
                        className="form-control"
                        value={props.apiData.amount}
                        min="1" max="50"
                        onChange={props.handleFormChange}
                    />
                </div>
                <div className="home--input-options">
                    <label htmlFor="category">Select Category:</label>
                    <select 
                        name="category"
                        id="category"
                        className="form-control"
                        value={props.apiData.category}
                        onChange={props.handleFormChange}
                    >
                        <option value="9">General Knowledge</option>
                        <option value="10">Entertainment: Books</option>
                        <option value="11">Entertainment: Film</option>
                        <option value="12">Entertainment: Music</option>
                        <option value="13">Entertainment: Musicals &amp; Theatres</option>
                        <option value="14">Entertainment: Television</option>
                        <option value="15">Entertainment: Video Games</option>
                        <option value="16">Entertainment: Board Games</option>
                        <option value="17">Science &amp; Nature</option>
                        <option value="18">Science: Computers</option>
                        <option value="19">Science: Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="25">Art</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                        <option value="29">Entertainment: Comics</option>
                        <option value="30">Science: Gadgets</option>
                        <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                        <option value="32">Entertainment: Cartoon &amp; Animations</option>
                    </select>
                </div>
                <div className="home--input-options">
                    <label htmlFor="difficulty">Select Difficulty:</label>
                    <select
                        name="difficulty"
                        id="difficulty"
                        className="form-control"
                        value={props.apiData.difficulty}
                        onChange={props.handleFormChange}
                    >
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                    </select>
                </div>
                <div className="home--input-options">
                    <label htmlFor="type">Select Type:</label>
                    <select 
                        name="type"
                        id="type"
                        className="form-control"
                        value={props.apiData.type}
                        onChange={(event) => props.handleFormChange(event)}
                    >
                            <option value="multiple">Multiple Choice</option>
                            <option value="boolean">True / False</option>
                    </select>
                </div>
                <button className="btn mt-5" onClick={props.startGame}>Start quiz</button>
            </div>
        </div>
    )
}

export default Home