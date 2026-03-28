import React, {useState} from 'react'

const App = () => {
  const [a, seta] = useState(10)

  const [i, seti] = useState(0)
  const [user, setuser] = useState(["Tejas Khurd", "Vedant Desai", "Harsh Dhuri", "Shravani Chormore"])
  return (
    <div>
      <h1>Value of a is {a}</h1>
      <h1>Value of a is {user[i]}</h1>
      <button onClick={()=> {
        seta(a+10)       

        seti((i+1)%4)
        // setuser(["Shravani Khurd", "Harsh Desai", "Vedant Dhuri", "Tejas Chormore"]) // you can set user like these
      }}>change a and user</button>

      <button onClick={() => {
        seta(a-10)

        seti((i-1+4)%4)
      }}>Reverse a and user</button>
    </div>
  )
}

export default App