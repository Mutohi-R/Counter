import { useState } from "react";
import {   ChevronDown } from 'react-feather'
import { ChevronUp } from 'react-feather'
import { ChevronsUp } from 'react-feather'
import { ChevronsDown } from 'react-feather'
import { Hash } from 'react-feather'
import { RotateCcw } from 'react-feather'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  const increaseByOne = () => {
    return (setCount(count => count + 1))
  }

  const increaseByTen = () => {
    return (setCount(count => count + 10))
  }

  const decreaseByOne = () => {
    return (setCount(count => count - 1))
  }

  const decreaseByTen = () => {
    return (setCount(count => count - 10))
  }

  const reset = () => {
    return (setCount(0))
  }

  const random = () => {
    return (setCount(Math.floor(Math.random() * 100)))
  }

  return (
    <>
      <div className="container">
      <div className="countState">
        <p className="state">Current Value:</p>
        <p className="count">{count}</p>
      </div>

        <div className="buttonSet">
          <button onClick={increaseByOne}><ChevronUp /></button>
          <button onClick={increaseByTen}><ChevronsUp /></button>
          <button onClick={reset}><RotateCcw /></button>
          <button onClick={random}><Hash /></button>
          <button onClick={decreaseByTen}><ChevronsDown /></button>
          <button onClick={decreaseByOne}><ChevronDown /></button>
        </div>

      </div>
    </>
  );
}

export default App;
