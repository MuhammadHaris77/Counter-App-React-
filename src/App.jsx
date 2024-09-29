import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const incrementCount=()=>{
    setCount(count+1)
 }
 const decrementCount=()=>{
  
  count < 1 ? count == 0 && alert("You Cant More Decrement after Zero")  : setCount(count-1)
}
  
  const [count, setCount] = useState(0)
   
  return (
    <>
  <h1>COUNTER APP</h1>
  <h1>{count}</h1>
  <button onClick={incrementCount}>ADD COUNTER</button>  <button onClick={decrementCount}>LESS COUNTER</button>
    </>
  )
  
export default App
