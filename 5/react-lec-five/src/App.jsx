import './App.css'
import { useEffect, useState } from 'react'
function App() {
const [count,setCount]=useState(0)
const [total,setTotal]=useState(0)
  //1-side effect function
  //2-Clean up function show in Output
  //3-Comma sperated Dependency-list(value daal dii tu har step pay show karaye ga agar brackets empty hogi tu 1-bar chalay ga)
//variation 1:

//   useEffect(() => {
//   alert("I will run on each render")
// },[count])

//variation 2:

// useEffect(() => {
//   alert("I will run only first time")
// }, [])

//variation 3:
// useEffect(() => {
//   alert("I will run when count and total is updated")
// },[count,total])

//variation 4:
//add cleanup function
// useEffect(() => {
//    alert("count is updated")

//   return () => {
//     alert("count is unmounted from UI page")
//   }
// },[count])


function handleTotal(){
setTotal(total+1) 
}
function handleClick(){
  setCount(count+1)
}
  return (
    <>
     Count is :{count}
     <br /> 
    <button className='btn' onClick={handleClick}>
     <b> Update </b> 
      </button>
     <br /> 
     Total   is :{total}
     <br /> 
    <button className='btn' onClick={handleTotal}>
     <b> Total </b> 
      </button>
      
     
    </>
  )
}

export default App
