import React, { useState } from 'react'

function Home(props) {
    const [apiData, setApiData] = useState({
        amount: "5",
        category: "General Knowledge",
        difficulty: "Easy",
        type: "Multiple Choice"
    })

    function handleFormChange(event) {
        const {name, value} = event.target
        setApiData(prevApiData => ({
                ...prevApiData, 
                    [name] : value 
        }))
    }
    console.log(apiData)

    return(
        <div className="d-flex flex-column align-items-center justify-content-center home-sec">
            <div className="home--text mb-3">
                Quizzical
            </div>
            <form className="home--input text-center">
                <label htmlFor="amount">Number of questions:</label>
                <input 
                    type="number" 
                    name="amount" 
                    id="amount" 
                    className="form-control"
                    value={apiData.amount}
                    min="1" max="50"
                    onChange={handleFormChange}
                />
                <select 
                    name="category"
                    id="category"
                    className="form-control"
                    value={apiData.category}
                    onChange={handleFormChange}
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
                <select
                    name="difficulty"
                    id="difficulty"
                    className="form-control"
                    value={apiData.difficulty}
                    onChange={handleFormChange}
                >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                </select>
                <select 
                    name="type"
                    id="type"
                    className="form-control"
                    value={apiData.type}
                    onChange={handleFormChange}
                >
                        <option value="multiple">Multiple Choice</option>
                        <option value="boolean">True / False</option>
                </select>
                <button className="btn mt-5" onClick={props.onClick}>Start quiz</button>
            </form>
        </div>
    )
}

export default Home