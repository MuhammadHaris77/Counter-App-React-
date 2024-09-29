import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const incrementCount=()=>{
    setCount(count+1)
 }
 const decrementCount=()=>{
  
  count < 1 ? count == 0 : setCount(count-1)
}
  
  const [count, setCount] = useState(0)
   
  return (
    <>
  <h1>COUNTER APP</h1>
  <h3>{count}</h3>
  <button onClick={incrementCount}>INCREMENT</button>  <button onClick={decrementCount}>DECREMENT</button>
    </>
  )
}

export default App
