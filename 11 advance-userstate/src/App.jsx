import React, {useState} from 'react'

const App = () => {
  const [obj, setobj] = useState({user:"Vedant", age: 50})
  const [arr, setarr] = useState([1,2,"3",4,"5"])
  const [num, setnum] = useState(10)

  const btnClicked = () => {
    const newObj= {...obj}; // This is not taking the same reference. It is using the spread operator to create a new object by copying the properties of obj.
    newObj.user = "Harsh";
    setobj(newObj);
  }

  return (
    <div>
      <h1>name = {obj.user}, age = {obj.age}</h1>
      <h1>arr = {arr}</h1>
      <h1>Num = {num}</h1>

      <button onClick={btnClicked} onDoubleClick={()=>{
        setobj({
          ...obj,
          user: "Shravani",                    
          age: 30,
        })
      }} onMouseEnter={() => setobj( prev => ({...prev, age:100})) } >Click</button>

      <button onClick={() => {
        const newArr = [...arr,8]
        newArr.push(6)
        setarr(newArr)
      }}>Click</button>

      <button onClick={()=> {
        setnum(num+1)
        setnum(num+1)
        setnum(num+1)
        // Updates only +1 (not +3)
      }} 
      >Click</button>

      <button onClick={() =>{
        setnum(prevNum => (prevNum+1)) 
        setnum(prevNum => (prevNum+1))
        setnum(prevNum => (prevNum+1))
        // Updates +3
        // Each update receives the latest updated value.
      }}>Clcik</button>
    </div>
  )
}

export default App