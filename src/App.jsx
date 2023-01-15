import React, { useState } from 'react'
import Home from './Home'
import Quiz from './Quiz'

function App() {
  const [hasGameStarted, sethasGameStarted] = React.useState(false)
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

  function startGame() {
    sethasGameStarted(true)
  }

  return (
    <div className="container">
      {hasGameStarted ? 
        <Quiz apiData={apiData} /> : 
        <Home 
          onClick={startGame} 
          handleFormChange={handleFormChange} 
          apiData={apiData} 
        />}
    </div>
  )
}

export default App
