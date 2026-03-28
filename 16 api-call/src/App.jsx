import axios from "axios"
import { useState } from "react";


const App = () => {


  const [todoData, settodoData] = useState([])

  // Meyhod 1
  const getData = async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); 

    console.log(response);

    const data = await response.json()
    console.log(data);
    

  }


  // Method 2
  const getData2 = async ()=>{
    // const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    // console.log(response.data);

    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users"); // --> destructing of data
    console.log(data);


    settodoData(data);
  }
  
  
  return (
    <div className="container">
      <h1>API Fetch Example</h1>

      <div className="btn-group">
        <button className="btn" onClick={getData}>
          Fetch 
        </button>

        <button className="btn btn-axios" onClick={getData2}>
          axios 
        </button>

        <div>
          {todoData.map((todo, idx) => {
            
            return (
            <div key={todo.id}>
              <h2>{todo.username}</h2>
            </div>
          )})}
        </div>
      </div>
    </div>
  )
}

export default App