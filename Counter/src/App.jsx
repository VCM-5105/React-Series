import { useState } from 'react'
import './App.css'

function App() {
 let [count,setCount]=useState(0);

  const addVal = () => {
    if (count < 30) {
      setCount(prev => prev + 1);
    } else {
      console.log("Max limit reached");
    }
  }

  const reduceVal = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    } else {
      console.log("Min limit reached");
    }
  }
 

  return (
    <>
      <h1>This is counter Project</h1>
      <h2>Current count: {count}</h2>
      <button onClick={addVal}>Add: {count}</button>
      <br />
      <button onClick={reduceVal}>Reduce: {count}</button>
    </>
  )
}

export default App
