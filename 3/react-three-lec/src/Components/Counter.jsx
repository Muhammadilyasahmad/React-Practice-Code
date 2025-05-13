import React, { useState } from 'react'
import './Counter.css'
const Counter = () => {
    const [count, setcount] = useState(0);
  return (
    <div className='counter-container'>
      <p id='counter-para'>You have Clicked {count} times</p>
      <button id='btn' onClick={()=>{setcount(count+1) }}> <b>Click me</b></button>
    </div>
  )
}
//<p>You have clicked {count} times</p>
//<button onClick ={()=>{setCount(count+1)}}><b>Click Me</b></button>
export default Counter
