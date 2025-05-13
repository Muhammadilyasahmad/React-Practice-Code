import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)
 function handleClick(){
  setCount(count+1);
 }
  
  return (
    <div>
      <h1 id='heading'>{count}</h1>
      <br />
      <Button handleClick={handleClick} text="Count" />
      
    </div>
  )
}

export default App
