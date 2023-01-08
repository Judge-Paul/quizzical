import React, { useState } from 'react'
import Home from './Home'
import Quiz from './Quiz'

function App() {
  const [hasGameStarted, sethasGameStarted] = React.useState(false)

  function startGame() {
    sethasGameStarted(true)
  }
  return (
    <div className="container">
      {hasGameStarted ? <Quiz /> : <Home onClick={startGame} />}
    </div>
  )
}

export default App
