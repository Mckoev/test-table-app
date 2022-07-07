import React, { useState } from 'react'
import { MouseEvent } from 'react'
import './App.css'

function App() {
  const [arr, setValue] = useState([1, 2, 3])

  const result = arr.map((element, index) => {
    return <p key={index}>{element}</p>
  })

  const getValue = (e: MouseEvent) => {
    e.preventDefault()
    fetch('http://localhost:3001/users')
      .then((response) => response.json())
      .then((result) => {
        let copy = Object.assign([], arr)
        console.log(typeof result[0])

        result.forEach((el: any) => copy.push(el.name))
        setValue(copy)
      })
  }
  return (
    <div className="App">
      <h1>hi</h1>

      <button onClick={(e) => getValue(e)}>КНОПКА</button>
      {result}
    </div>
  )
}

export default App
